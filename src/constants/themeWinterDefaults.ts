import {
  SeasonalThemes,
  ThemeIDs,
  ThemeModes,
} from '../types/theme/themeCommonTypes.ts';

import {ThemeDecorations} from '../types/theme/themeDecorationsTypes.ts';
import {LIGHT_THEME_BASE} from './themeLightBaseDefaults.ts';
import {DARK_THEME_BASE} from './themeDarkBaseDefaults.ts';

export const THEME_WINTER = {
  [ThemeModes.LIGHT]: (scale: number = 1) => ({
    ...LIGHT_THEME_BASE(scale),
    meta: {
      id: ThemeIDs.DEFAULT_WINTER,
      name: SeasonalThemes.WINTER,
      type: SeasonalThemes.WINTER,
      season: SeasonalThemes.WINTER,
    },
    decoration: ThemeDecorations.WINTER,
  }),
  [ThemeModes.DARK]: (scale: number = 1) => ({
    ...DARK_THEME_BASE(scale),
    meta: {
      id: ThemeIDs.DEFAULT_WINTER,
      name: SeasonalThemes.WINTER,
      type: SeasonalThemes.WINTER,
      season: SeasonalThemes.WINTER,
    },
    decoration: ThemeDecorations.WINTER,
  }),
};
