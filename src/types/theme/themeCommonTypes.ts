import {COLORS} from '../../constants/themeColorsConstants.ts';

export enum SeasonalThemes {
  NONE = 'none',
  WINTER = 'winter',
  RAMADHAN = 'ramadhan',
  NEW_YEAR = 'new_year',
}

export enum ThemeIDs {
  DEFAULT_LIGHT = 'default-light',
  DEFAULT_DARK = 'default-dark',
  DEFAULT_WINTER = 'default-winter',
}

export enum ThemeModes {
  LIGHT = 'light',
  DARK = 'dark',
}

// Generic type to extract the values of any enum
export type EnumValues<T> = T[keyof T];

// Using the generic EnumValues type to get the values of Colors
export type ThemeColor = EnumValues<typeof COLORS>;
export type ThemeID = ThemeIDs;
export type ThemeName = ThemeModes | SeasonalThemes;
export type CommonThemeType = ThemeModes | SeasonalThemes;
export type SeasonalThemeType = SeasonalThemes;
export type ThemeSpacing = number;
