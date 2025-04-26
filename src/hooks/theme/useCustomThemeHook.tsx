import {ThemeContextValue} from '../../types/contexts/themesTypes.ts';
import {useContext} from 'react';
import {CustomThemeContext} from '../../contexts/customThemeContext/themeContext.tsx';

/********************************
 * Hook to use the theme context *
 ********************************/
export const useCustomTheme = (): ThemeContextValue => {
  const context = useContext(CustomThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
