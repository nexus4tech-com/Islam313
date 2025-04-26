import {Context, createContext} from 'react';
import {ThemeContextValue} from '../../types/contexts/themesTypes.ts';
import {DEFAULT_THEME_CONTEXT_VALUE} from '../../constants/themeContextDefaultValue.ts';

// @ts-ignore
export const CustomThemeContext: Context<ThemeContextValue> = createContext(
  DEFAULT_THEME_CONTEXT_VALUE,
);
