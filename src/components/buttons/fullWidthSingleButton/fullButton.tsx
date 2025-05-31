import {
    StyleProp,
    StyleSheet,
    Text, TextStyle,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import React from 'react';
import {GestureResponderEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import {COLORS} from '../../../constants/themeColorsConstants.ts';
import {Theme} from '../../../types/theme/themesTypes.ts';

import {useCustomTheme} from '../../../hooks/theme/useCustomThemeHook.tsx';
import {makeStyles} from '../../../utils/theme/themeMakeStyle.ts';

type FullButtonProps = {
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    containerStyles?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    labelKey?: string;
};

export default function FullButton(props: FullButtonProps): React.ReactElement {
    const {onPress, containerStyles, labelStyle, labelKey = 'continue'} = props;
    const {theme} = useCustomTheme();
    const styles = React.useMemo(() => makeStyles(createStyles, theme), [theme]);

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.container, containerStyles]}
            onPress={onPress}>
            <Text style={[styles.textStyle, labelStyle]}>{labelKey}</Text>
        </TouchableOpacity>
    );
}

const createStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            backgroundColor: COLORS.TEAL_200,
            marginHorizontal: theme.spacing.LG,
            borderRadius: 9,
            marginVertical: theme.spacing.XL,
            height: theme.spacing.XXL * 2,
            alignItems: 'center',
            justifyContent: 'center',
        },
        textStyle: {
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 'bold',
            color: theme.colors.onSecondary,
        },
    });
