// Metadata about the theme
import {
  ThemeID,
  ThemeName,
  CommonThemeType,
  SeasonalThemeType,
} from './themeCommonTypes.ts';

export type ThemeMetaTypes = {
  id: ThemeID; // Unique identifier for the theme
  name: ThemeName; // Display name of the theme
  type: CommonThemeType; // Theme mode
  season: SeasonalThemeType;
};
