import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useCustomTheme} from '../../hooks/theme/useCustomThemeHook';
import {makeStyles} from '../../utils/theme/themeMakeStyle';
import {Theme} from '../../types/theme/themesTypes';
import Header from '../../components/Headers/Header';
import HeaderLeft from '../../components/Headers/HeaderLeft';
import HeaderRight from '../../components/Headers/HeaderRight';

const HomeScreen = () => {
  const {theme} = useCustomTheme();
  const styles = React.useMemo(() => makeStyles(createStyles, theme), [theme]);

  return (
    <>
      <Header
        leftContent={
          <HeaderLeft>
            <Text style={styles.text}>Back</Text>
          </HeaderLeft>
        }
        centerContent={<Text style={styles.title}>Dashboard</Text>}
        rightContent={
          <HeaderRight>
            <Text style={styles.text}>Right content</Text>
          </HeaderRight>
        }
      />
    </>
  );
};

export default HomeScreen;

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    title: {
      fontSize: theme.spacing.LG,
      fontWeight: 'bold',
      color: theme.colors.secondary,
    },
    text: {
      color: theme.colors.secondary,
    },
  });
