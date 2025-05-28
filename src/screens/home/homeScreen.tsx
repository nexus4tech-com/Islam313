import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useCustomTheme} from '../../hooks/theme/useCustomThemeHook.tsx';
import {makeStyles} from '../../utils/theme/themeMakeStyle.ts';
import {Theme} from '../../types/theme/themesTypes.ts';
import {resetFirstLaunch} from '../../services/firstLaunchService.ts';

const HomeScreen = () => {
  const {theme} = useCustomTheme();
  const styles = React.useMemo(() => makeStyles(createStyles, theme), [theme]);
    return (
        <View style={styles.mainContainer}>
            <Text>Home Screen</Text>
          <Text onPress={resetFirstLaunch}>Reset first launch</Text>
        </View>
    );
};

export default HomeScreen;

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
