import {THEME_LIGHT} from './themeLightDefaults.ts';
import {ThemeModes} from '../types/theme/themeCommonTypes.ts';
import {Dimensions} from 'react-native';

// Generic noop function
const noop: any = () => {};
export const DEFAULT_THEME_CONTEXT_VALUE = {
  theme: {
    ...THEME_LIGHT(),
    screenDimensions: {
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height,
    },
  },
  setMode: noop,
  setSeasonalTheme: noop,
  selectedMode: ThemeModes.LIGHT,
};
