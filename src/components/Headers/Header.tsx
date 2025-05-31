import React from 'react';
import {StatusBar, StyleSheet, View, ViewStyle, TouchableOpacity} from 'react-native';
import {useCustomTheme} from '../../hooks/theme/useCustomThemeHook';
import {makeStyles} from '../../utils/theme/themeMakeStyle';
import {Theme} from '../../types/theme/themesTypes';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants/themeColorsConstants.ts';

type HeaderProps = {
  leftContent?: React.ReactNode | null;
  centerContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  style?: ViewStyle;
  showDefaultBack?: boolean;
};

const Header = ({
                  leftContent,
                  centerContent,
                  rightContent,
                  onLeftPress,
                  onRightPress,
                  style,
                  showDefaultBack = true,
                }: HeaderProps) => {
  const navigation = useNavigation();
  const {theme} = useCustomTheme();
  const styles = React.useMemo(() => makeStyles(createStyles, theme), [theme]);

  const renderLeftContent = () => {
    // If explicitly set to null, render nothing
    if (leftContent === null) {
      return null;
    }

    // If custom content is provided
    if (leftContent) {
      return leftContent;
    }

    // If default back button should be shown
    if (showDefaultBack) {
      return (
        <TouchableOpacity
          onPress={onLeftPress || navigation.goBack}
          accessibilityLabel="Go back"
          accessibilityRole="button"
        >
          <Icon
            name="arrow-back"
            size={32}
            color={theme.colors.secondary}
          />
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <>
      <StatusBar backgroundColor={theme.colors.primary} barStyle="light-content" />
      <View style={[styles.container, style]}>
        <View>
          {renderLeftContent() && (
            <HeaderLeft onPress={onLeftPress || navigation.goBack}>
              {renderLeftContent()}
            </HeaderLeft>
          )}
        </View>

        <View>{centerContent}</View>

        <View>
          {rightContent && (
            <HeaderRight onPress={onRightPress}>{rightContent}</HeaderRight>
          )}
        </View>
      </View>
    </>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      minHeight: 56,
      backgroundColor:COLORS.HEADER_COLOR,
      width: '100%',
      top : 70,
    },
  });

export default React.memo(Header);
