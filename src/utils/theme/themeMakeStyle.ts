import {StyleSheet} from 'react-native';
import {Theme} from '../../types/theme/themesTypes.ts';

export const makeStyles = (
  // eslint-disable-next-line no-unused-vars
  styleFactory: (theme: Theme) => any,
  theme: Theme,
) => {
  return StyleSheet.create(styleFactory(theme));
};
