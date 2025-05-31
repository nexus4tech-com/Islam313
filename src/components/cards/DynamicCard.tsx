import React, { memo, useMemo } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TouchableOpacityProps,
    LayoutChangeEvent,
} from 'react-native';

interface DynamicCardProps extends TouchableOpacityProps {
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    onLayout?: (event: LayoutChangeEvent) => void;
}

const DynamicCardComponent = ({
                                  width = '100%',
                                  height,
                                  borderRadius = 8,
                                  backgroundColor = '#FFFFFF',
                                  borderColor = '#E0E0E0',
                                  borderWidth = 1,
                                  children,
                                  style,
                                  onLayout,
                                  ...touchableProps
                              }: DynamicCardProps) => {
    // Memoized card styles to prevent unnecessary recalculations
    const cardStyles : {} = useMemo(() => ({
        width,
        height,
        borderRadius,
        backgroundColor,
        borderColor,
        borderWidth,
        overflow: 'hidden',
    }), [width, height, borderRadius, backgroundColor, borderColor, borderWidth]);

    return (
        <TouchableOpacity
            {...touchableProps}
            activeOpacity={touchableProps.activeOpacity ?? 0.9}
            style={[styles.base, cardStyles, style]}
            onLayout={onLayout}
        >
            {children}
        </TouchableOpacity>
    );
};

// Memoize component for optimal performance
export const DynamicCard = memo(DynamicCardComponent);

const styles = StyleSheet.create({
    base: {
        padding: 16,
    },
});
