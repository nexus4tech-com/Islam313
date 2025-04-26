import {useEffect, useState} from 'react';
import {ThemeDecorations} from '../../types/theme/themeDecorationsTypes.ts';
import {useCustomTheme} from './useCustomThemeHook.tsx';
import {SCREEN_NAMES} from '../../constants/screenNamesConstants.ts';
import {SCREEN_ANIMATION_SECTIONS} from '../../constants/screenAnimationSectionsConstants.ts';

const useBackgroundAnimation = (
  screen: string = SCREEN_NAMES.SPLASH_SEASONAL_SCREEN,
) => {
  const {theme, selectedMode} = useCustomTheme();

  const [animationSource, setAnimationSource] = useState<string | null>(null);
  const [animationName, setAnimationName] = useState<string | null>(null);

  useEffect(() => {
    const newAnimationSource = `${theme.meta.name}_${screen}`;
    const newAnimationName = `${theme.decoration}_${selectedMode}_${screen}_${SCREEN_ANIMATION_SECTIONS.BACKGROUND}`;
    switch (theme.decoration) {
      case ThemeDecorations.NEW_YEAR:
      case ThemeDecorations.WINTER:
        setAnimationSource(newAnimationSource);
        setAnimationName(newAnimationName);
        break;
      default:
        setAnimationSource(null);
    }
  }, [screen, selectedMode, theme]);

  return {
    animationSource,
    animationName,
    artboardName: animationName,
  };
};

export default useBackgroundAnimation;
