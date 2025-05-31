import React, {useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import FullButton from '../../components/buttons/fullWidthSingleButton/fullButton';
import MiddleScreenImage from '../../components/middleScreenImage/MiddleScreenImage';
import CommonText from '../../components/commonText/CommonText';
import OnboardingHeader from '../../components/onboarding/OnboardingHeader';
import PaginationDots from '../../components/onboarding/PaginationDots';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAMES} from '../../constants/screenNamesConstants.ts';
import {useCustomTheme} from '../../hooks/theme/useCustomThemeHook.tsx';
import {makeStyles} from '../../utils/theme/themeMakeStyle.ts';
import {Theme} from '../../types/theme/themesTypes.ts';
import {onboardingData} from '../../utils/data/onBoardingData.ts';
import {SCREEN_WIDTH} from '../../services/windowScreenService.ts';

const OnBoarding = () => {
  const navigation = useNavigation();
  const {theme} = useCustomTheme();
  const styles = React.useMemo(() => makeStyles(createStyles, theme), [theme]);
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
      setCurrentIndex(nextIndex);
    } else {
      navigation.navigate(SCREEN_NAMES.HOME_SCREEN as never);
    }
  };

  const handleSkip = () => {
    navigation.navigate(SCREEN_NAMES.HOME_SCREEN as never);
  };

  return (
      <View style={styles.container}>
        <OnboardingHeader
          onSkip={handleSkip}
          showSkip={true}
        />

        <FlatList
          ref={flatListRef}
          data={onboardingData}
          scrollEnabled={false}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(index) => index.toString()}
          onMomentumScrollEnd={e => {
            const index = Math.round(
                e.nativeEvent.contentOffset.x / SCREEN_WIDTH,
            );
            setCurrentIndex(index);
          }}
          renderItem={({item}) => (
            <View style={styles.slide}>
              <MiddleScreenImage image={item.image} />
              <CommonText heading={item.heading} label={item.label} />
            </View>
          )}
          getItemLayout={(_, index) => ({
            length: SCREEN_WIDTH,
            offset: SCREEN_WIDTH * index,
            index,
          })}
        />

        <View style={styles.footer}>
          <FullButton
            labelKey={
              currentIndex === onboardingData.length - 1
                ? 'Enable Location'
                : 'Continue'
            }
            onPress={handleNext}
          />
          <PaginationDots
            total={onboardingData.length}
            activeIndex={currentIndex}
          />
        </View>
      </View>
  );
};

const createStyles = (theme: Theme) =>
    StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3E0',
  },
  slide: {
    width: SCREEN_WIDTH,
    paddingHorizontal: theme.spacing.LG,
    alignItems: 'center',
  },
  footer: {
    paddingBottom: theme.spacing.XXL,
    paddingHorizontal: theme.spacing.LG,
  },
});

export default OnBoarding;
