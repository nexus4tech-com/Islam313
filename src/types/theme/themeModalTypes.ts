import {ThemeColor} from './themeCommonTypes.ts';
import {ModalAnimation} from '../common/index.ts';

// Modal-specific theme
export type ModalTheme = {
  backgroundColor: ThemeColor;
  animation?: ModalAnimation; // Modal-specific animation
};
