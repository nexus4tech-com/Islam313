import {ThemeColor} from './themeCommonTypes.ts';
import {ThemeDecorations} from './themeDecorationsTypes.ts';

// Colors for the theme
export type ThemeColors = {
  primaryText: any;
  // Core Colors
  primary: ThemeColor; // Main brand color
  onPrimary: ThemeColor; // Text/icon color on primary
  primaryVariant: ThemeColor; // Slightly darker or lighter primary

  secondary: ThemeColor; // Secondary brand/accent color
  onSecondary: ThemeColor; // Text/icon color on secondary
  secondaryVariant: ThemeColor; // Slightly darker or lighter secondary
  onSecondaryBackground: ThemeColor;
  background: ThemeColor; // Screen background
  onBackground: ThemeColor; // Text/icon color on background

  surface: ThemeColor; // Component surface color
  onSurface: ThemeColor; // Text/icon color on surface

  // Feedback/State Colors
  error: ThemeColor; // For error states
  onError: ThemeColor; // Text/icon color on error
  success: ThemeColor; // For success states
  onSuccess: ThemeColor; // Text/icon color on success
  warning: ThemeColor; // For warning states
  onWarning: ThemeColor; // Text/icon color on warning

  // for react-navigation theme support
  card: ThemeColor;
  text: ThemeColor;
  border: ThemeColor;
  notification: ThemeColor;
  ////////////////////////////////////

  header: ThemeColor;
  // Seasonal/Decorative Colors
  decorative?: ThemeDecorations; // Flexible, e.g., snowflakes, fireworks
};
