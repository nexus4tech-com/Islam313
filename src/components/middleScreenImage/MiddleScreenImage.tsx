import {useCustomTheme} from '../../hooks/theme/useCustomThemeHook.tsx';
import React from 'react';
import {makeStyles} from '../../utils/theme/themeMakeStyle.ts';
import {Theme} from '../../types/theme/themesTypes.ts';
import {Image, StyleSheet, View} from 'react-native';

type MiddleScreenImageProps = {
  image?: string | number; // Accepts both URI and require()
};

const MiddleScreenImage = ({image}: MiddleScreenImageProps) => {
  const {theme} = useCustomTheme();
  const styles = React.useMemo(() => makeStyles(createStyles, theme), [theme]);

  const imageSource = typeof image === 'string' ? {uri: image} : image;

  return (
    <View style={styles.imageContainer}>
      <Image source={imageSource} resizeMode="contain" style={styles.image} />
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
    image: {
      width: '80%',
      maxWidth: 400,
      aspectRatio: 1,
    },
  });
