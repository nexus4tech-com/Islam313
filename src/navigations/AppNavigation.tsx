import {StyleSheet, Text, View} from 'react-native';
import {useCustomTheme} from '../hooks/theme/useCustomThemeHook';
import {useMemo} from 'react';
import {makeStyles} from '../utils/theme/themeMakeStyle';
import {Theme} from '../types/theme/themesTypes';

const AppNavigation = () => {
  const {theme} = useCustomTheme();
  const styles = useMemo(() => makeStyles(createStyles, theme), [theme]);
  return (
    <View style={styles.container}>
      <Text>Welcome to Nexus4Tech.</Text>
    </View>
  );
};

export default AppNavigation;
const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
    },
  });
