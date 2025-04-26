import {ThemeColor, ThemeSpacing} from './themeCommonTypes.ts';
import {BorderRadius} from '../common/index.ts';

// Button-specific theme
export type ButtonTheme = {
  backgroundColor: ThemeColor;
  textColor: ThemeColor;
  borderRadius: BorderRadius;
  padding: ThemeSpacing;
};
