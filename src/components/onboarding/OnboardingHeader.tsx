import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import { useCustomTheme } from '../../hooks/theme/useCustomThemeHook';
import { makeStyles } from '../../utils/theme/themeMakeStyle';
import { Theme } from '../../types/theme/themesTypes';

type OnboardingHeaderProps = {
    onSkip: () => void;
    showSkip: boolean;
};

const OnboardingHeader = ({ onSkip , showSkip = true }: OnboardingHeaderProps) => {
    const { theme } = useCustomTheme();
    const styles = React.useMemo(() => makeStyles(createStyles, theme), [theme]);

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/OnboardingLogo.png')}
                    style={styles.logo}
                />
                <Text style={styles.appName}>Islam313</Text>
            </View>
          {showSkip && (
            <TouchableOpacity onPress={onSkip}>
              <Text>Skip</Text>
            </TouchableOpacity>
          )}
        </View>
    );
};

const createStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: theme.spacing.MD,
        },
        logoContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        logo: {
            width: 32,
            height: 32,
            marginRight: theme.spacing.SM,
        },
        appName: {
            fontSize: theme.spacing.LG,
            fontWeight: 'bold',
            color: theme.colors.primary,
        },
        skipText: {
            color: theme.colors.onSecondary,
            fontSize: theme.spacing.MD,
        },
    });

export default OnboardingHeader;
