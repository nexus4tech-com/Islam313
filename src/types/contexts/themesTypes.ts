import {Theme} from '../theme/themesTypes.ts';
import {Dispatch, ReactNode, SetStateAction} from 'react';
import {SeasonalThemes, ThemeModes} from '../theme/themeCommonTypes.ts';

export interface ThemeContextValue {
  theme: Theme;
  // eslint-disable-next-line no-unused-vars
  setMode: (updatedTheme: ThemeModes) => void;
  setSeasonalTheme: Dispatch<SetStateAction<SeasonalThemes>>;
  selectedMode: ThemeModes;
}

export interface ScreenDimensions {
  screenWidth: number;
  screenHeight: number;
}

// Provider props
export interface ThemeProviderProps {
  children: ReactNode;
}
