import React from 'react';
import {StatusBar, StyleSheet, View, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useCustomTheme} from '../../hooks/theme/useCustomThemeHook';
import {makeStyles} from '../../utils/theme/themeMakeStyle';
import {Theme} from '../../types/theme/themesTypes';

type HeaderProps = {
  leftContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  style?: ViewStyle;
};

const Header = ({
  leftContent,
  centerContent,
  rightContent,
  style,
}: HeaderProps) => {
  const {theme} = useCustomTheme();
  const styles = React.useMemo(() => makeStyles(createStyles, theme), [theme]);

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView edges={['top']} style={styles.safeAreaView}>
        <View style={[styles.container, style]}>
          <View style={styles.section}>{leftContent}</View>
          <View style={styles.centerSection}>{centerContent}</View>
          <View style={styles.rightSection}>{rightContent}</View>
        </View>
      </SafeAreaView>
    </>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    safeAreaView: {
      backgroundColor: theme.colors.primary,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      minHeight: 56,
      backgroundColor: theme.colors.primary,
      width: '100%',
    },
    section: {
      flex: 1,
      alignItems: 'flex-start',
    },
    centerSection: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightSection: {
      flex: 1,
      alignItems: 'flex-end',
    },
  });

export default React.memo(Header);
