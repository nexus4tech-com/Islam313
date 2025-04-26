// Typography styles
import {FontFamilyName, FontSize} from '../common/index.ts';
import {ThemeColor} from './themeCommonTypes.ts';

type Typography = {
  fontFamily: FontFamilyName;
  fontSize: FontSize;
  color: ThemeColor;
};
export type ThemeTypography = {
  logoText: Typography;
  smallLogoText: Typography;
  headings: Typography;
  body: Typography;
  mainButtonText: Typography;
  actionButtonText: Typography;
};
