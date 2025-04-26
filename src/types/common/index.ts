import {SCREEN_NAMES} from '../../constants/screenNamesConstants.ts';

export type FontSize = number;
export type FontFamilyName = string;
export type BorderRadius = string;
export type ModalAnimation = string;
export type ScreenName = (typeof SCREEN_NAMES)[keyof typeof SCREEN_NAMES];
export type SnowflakeSize = number;
