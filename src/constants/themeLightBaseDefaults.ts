import {COLORS} from './themeColorsConstants.ts';
import {FONTS} from './themeFontsConstants.ts';
import {FONT_SIZES} from './fontsSizeConstants.ts';
import {getDefaultLayoutSpacing} from './themeLayoutSpacingDefault.ts';

export const LIGHT_THEME_BASE = (scale: number = 1) => ({
  colors: {
    primary: COLORS.TEAL,
    onPrimary: COLORS.PURE_WHITE_50,
    primaryVariant: COLORS.DARK_GRAY_900,

    secondary: COLORS.PURE_WHITE_50,
    onSecondary: COLORS.DARK_GRAYISH,
    secondaryVariant: COLORS.TEAL,
    background: COLORS.LIGHT_GRAY_300,
    success: COLORS.VIVID_RED_500, // Success color (red)
    onSuccess: COLORS.BRIGHT_GREEN, // Light text/icons on success
    onSecondaryBackground: COLORS.LIGHT_GRAY,
    // for react-navigation theme support
    card: COLORS.LIGHT_GRAY_300,
    header: COLORS.TEAL_700,
  },
  spacing: getDefaultLayoutSpacing(scale),
  typography: {
    headings: {
      fontFamily: FONTS.MARCK_SCRIPT,
      fontSize: FONT_SIZES.H3 * scale,
      color: COLORS.PURE_WHITE_50,
    },
    body: {
      fontFamily: FONTS.ROBOT_SERIF,
      fontSize: FONT_SIZES.BODY * scale,
      color: COLORS.DARK_GRAYISH,
    },
    mainButtonText: {
      fontFamily: FONTS.ROBOT_SERIF,
      fontSize: FONT_SIZES.H1 * scale,
      color: COLORS.TEAL,
    },
    actionButtonSuccess: {
      fontSize: FONT_SIZES.H3 * scale,
      color: COLORS.BRIGHT_GREEN,
    },
    actionButtonOnSuccess: {
      fontSize: FONT_SIZES.H3 * scale,
      color: COLORS.BRIGHT_GREEN,
    },
  },
});
