import {
  SeasonalThemes,
  ThemeIDs,
  ThemeModes,
} from '../types/theme/themeCommonTypes.ts';

import {ThemeDecorations} from '../types/theme/themeDecorationsTypes.ts';
import {DARK_THEME_BASE} from './themeDarkBaseDefaults.ts';
import {Dimensions} from 'react-native';

export const THEME_DARK = (scale: number = 1) => ({
  ...DARK_THEME_BASE(scale),
  meta: {
    id: ThemeIDs.DEFAULT_DARK,
    name: ThemeModes.DARK,
    type: ThemeModes.DARK,
    season: SeasonalThemes.NONE,
  },
  mode: ThemeModes.DARK,
  decoration: ThemeDecorations.NONE,
  screenDimensions: {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
  },
});
