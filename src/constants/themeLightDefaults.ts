import {Theme} from '../types/theme/themesTypes.ts';
import {
  SeasonalThemes,
  ThemeIDs,
  ThemeModes,
} from '../types/theme/themeCommonTypes.ts';
import {ThemeDecorations} from '../types/theme/themeDecorationsTypes.ts';
import {LIGHT_THEME_BASE} from './themeLightBaseDefaults.ts';
import {Dimensions} from 'react-native';

export const THEME_LIGHT = (scale: number = 1): Theme => ({
  ...LIGHT_THEME_BASE(scale),
  meta: {
    id: ThemeIDs.DEFAULT_LIGHT,
    name: ThemeModes.LIGHT,
    type: ThemeModes.LIGHT,
    season: SeasonalThemes.NONE,
  },
  mode: ThemeModes.LIGHT,
  decoration: ThemeDecorations.NONE,
  screenDimensions: {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
  },
});
