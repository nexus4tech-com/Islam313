
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useCustomTheme } from '../../hooks/theme/useCustomThemeHook';
import { makeStyles } from '../../utils/theme/themeMakeStyle';
import { Theme } from '../../types/theme/themesTypes';

type PaginationDotsProps = {
    total: number;
    activeIndex: number;
};

const PaginationDots = React.memo(({ total, activeIndex }: PaginationDotsProps) => {
    const { theme } = useCustomTheme();
    const styles = React.useMemo(() => makeStyles(createStyles, theme), [theme]);

    return (
        <View style={styles.container}>
            {Array.from({ length: total }).map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.dot,
                        activeIndex === index ? styles.activeDot : styles.inactiveDot
                    ]}
                />
            ))}
        </View>
    );
});

const createStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: theme.spacing.MD,
        },
        dot: {
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 4,
        },
        activeDot: {
            backgroundColor: theme.colors.primary,
          height: 8,
          width: 50,
        },
        inactiveDot: {
            backgroundColor: theme.colors.onSecondary,
        },
    });

export default PaginationDots;
