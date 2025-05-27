import {useCustomTheme} from '../../hooks/theme/useCustomThemeHook.tsx';
import React from 'react';
import {makeStyles} from '../../utils/theme/themeMakeStyle.ts';
import {Theme} from '../../types/theme/themesTypes.ts';
import {Image, StyleSheet, View} from 'react-native';

type MiddleScreenImageProps = {
  image: string;
}
const MiddleScreenImage = (props:MiddleScreenImageProps) => {
  const {theme} = useCustomTheme();
  const styles = React.useMemo(() => makeStyles(createStyles, theme), [theme]);
  const imageUrl = require('../../assets/images/DummyImage.png');
  return (
    <View style={styles.imageContainer}>
      <Image source={imageUrl} />
    </View>
  );
};

export default MiddleScreenImage;

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
