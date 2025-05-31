import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useCustomTheme} from '../../hooks/theme/useCustomThemeHook';
import {makeStyles} from '../../utils/theme/themeMakeStyle';
import {Theme} from '../../types/theme/themesTypes';
import Header from '../../components/Headers/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useRoute} from '@react-navigation/native';
import {SCREEN_NAMES} from '../../constants/screenNamesConstants.ts';

const HomeScreen = () => {
  const {theme} = useCustomTheme();
  const styles = React.useMemo(() => makeStyles(createStyles, theme), [theme]);
  const route = useRoute();

  const isHomeScreen = route.name === SCREEN_NAMES.HOME_SCREEN;

  return (
    <>
      <Header
        onLeftPress={()=>{}}
        onRightPress={()=>{}}
        leftContent={
          <Icon
            name={isHomeScreen ? 'menu' : 'arrow-back'}
            size={24}
            color={theme.colors.secondary}
          />
        }
        centerContent={<Text style={styles.title}>Dashboard</Text>}
        rightContent={
          <Icon
            name="notifications"
            size={24}
            color={theme.colors.secondary}
          />
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
