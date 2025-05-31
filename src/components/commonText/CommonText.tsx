import {useCustomTheme} from '../../hooks/theme/useCustomThemeHook.tsx';
import React from 'react';
import {makeStyles} from '../../utils/theme/themeMakeStyle.ts';
import {Theme} from '../../types/theme/themesTypes.ts';
import {StyleSheet, Text, View} from 'react-native';

type CommonTextProps = {
  label?: string;
  heading?:string;
};
const CommonText = ({label,heading}: CommonTextProps) => {
  const {theme} = useCustomTheme();
  const styles = React.useMemo(() => makeStyles(createStyles, theme), [theme]);
  return (
    <View style={styles.textContainer}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default CommonText;

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    textContainer: {
        justifyContent:'center',
        alignItems: 'center',
    },
    text: {
      fontSize: theme.spacing.LG,
      textAlign: 'left',
      color: theme.colors.onSecondary,
      paddingTop: theme.spacing.LG,
    },
    heading: {
      fontSize: theme.spacing.XL,
      textAlign: 'center',
      color: theme.colors.onSecondary,
    },
  });
