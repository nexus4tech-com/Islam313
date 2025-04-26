import {ThemeMetaTypes} from './themeMetaTypes.ts';
import {ThemeColors} from './themeColorsTypes.ts';
import {ThemeTypography} from './themeTypographyTypes.ts';
import {ThemeModes} from './themeCommonTypes.ts';
import {ThemeDecorations} from './themeDecorationsTypes.ts';
import {ScreenDimensions} from '../contexts/themesTypes.ts';
import {LAYOUT} from '../../constants/layoutSizeConstants.ts';

export type Theme = {
  dark: any;
  meta: ThemeMetaTypes; // Metadata about the theme
  colors: ThemeColors; // Color palette
  typography: ThemeTypography; // Text styles
  mode: ThemeModes;
  decoration: ThemeDecorations;
  screenDimensions: ScreenDimensions;
  spacing: typeof LAYOUT.SIZE;
};
