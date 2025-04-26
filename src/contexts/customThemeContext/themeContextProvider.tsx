import React, {useEffect, useMemo, useState} from 'react';
import {
  ThemeContextValue,
  ThemeProviderProps,
} from '../../types/contexts/themesTypes.ts';
import {useColorScheme} from 'react-native';
import {useSizeScale} from '../../hooks/theme/useSizeScaleHook.tsx';
import {
  SeasonalThemes,
  ThemeModes,
} from '../../types/theme/themeCommonTypes.ts';
import {THEME_LIGHT} from '../../constants/themeLightDefaults.ts';
import {THEME_DARK} from '../../constants/themeDarkDefaults.ts';
import {CustomThemeContext} from './themeContext.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNC_STORAGE_KEYS} from '../../constants/asyncStorageKeysConstants.ts';
import {THEME_WINTER} from '../../constants/themeWinterDefaults.ts';
import {THEME_RAMADHAN} from '../../constants/themeRamadhanDefaults.ts';
import {Theme} from '../../types/theme/themesTypes.ts';

/*****************************
 * Theme Provider Component  *
 ****************************/
export const CustomThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const systemColorScheme = useColorScheme(); // Detect system theme ('light' or 'dark')
  const {sizeScale, screenDimensions} = useSizeScale();

  const [mode, setMode] = useState<ThemeModes | null>(null); // `null` means follow system theme
  const [seasonalTheme, setSeasonalTheme] = useState<SeasonalThemes>(
    SeasonalThemes.NONE,
  );

  // Load theme preference on mount
  useEffect(() => {
    const getSelectedTheme = async () => {
      const storedTheme = await AsyncStorage.getItem(
        ASYNC_STORAGE_KEYS.SELECTED_THEME_MODE,
      );
      setMode(storedTheme ? (storedTheme as ThemeModes) : null);
    };
    getSelectedTheme();
  }, []);

  // Persist user preference
  const updateSelectedMode = async (updatedMode: ThemeModes | null) => {
    try {
      if (updatedMode === null) {
        await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.SELECTED_THEME_MODE);
      } else {
        await AsyncStorage.setItem(
          ASYNC_STORAGE_KEYS.SELECTED_THEME_MODE,
          updatedMode,
        );
      }
    } catch (e) {
      console.log('Error updating selected mode:', e);
    } finally {
      setMode(updatedMode);
    }
  };

  // Compute the effective theme mode (user preference > system theme)
  const effectiveMode = mode || (systemColorScheme as ThemeModes);

  // Compute theme
  const value = useMemo<ThemeContextValue>(() => {
    const applyScreenDimensionsToTheme = (baseTheme: Partial<Theme>) => ({
      ...baseTheme,
      screenDimensions,
    });

    let baseTheme = applyScreenDimensionsToTheme(THEME_LIGHT(sizeScale));
    if (effectiveMode === 'dark') {
      baseTheme = applyScreenDimensionsToTheme(THEME_DARK(sizeScale));
    }

    let appliedTheme = baseTheme;
    if (seasonalTheme !== SeasonalThemes.NONE) {
      switch (seasonalTheme) {
        case SeasonalThemes.WINTER:
        case SeasonalThemes.NEW_YEAR:
          appliedTheme = applyScreenDimensionsToTheme({
            ...THEME_WINTER[effectiveMode](sizeScale),
            mode: effectiveMode,
          });
          break;
        case SeasonalThemes.RAMADHAN:
          appliedTheme = applyScreenDimensionsToTheme({
            ...THEME_RAMADHAN[effectiveMode](sizeScale),
            mode: effectiveMode,
          } as Theme);
          break;
        default:
          appliedTheme = applyScreenDimensionsToTheme({
            ...THEME_WINTER[effectiveMode](sizeScale),
            mode: effectiveMode,
          } as Theme);
          break;
      }
    }

    return {
      theme: appliedTheme,
      setMode: updateSelectedMode,
      setSeasonalTheme,
      selectedMode: effectiveMode,
    };
  }, [effectiveMode, seasonalTheme, sizeScale]);

  return (
    <CustomThemeContext.Provider value={value}>
      {children}
    </CustomThemeContext.Provider>
  );
};

