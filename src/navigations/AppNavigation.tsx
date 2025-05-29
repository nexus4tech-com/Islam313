import OnBoarding from '../screens/onboarding/onBoarding.tsx';
import {SCREEN_NAMES} from '../constants/screenNamesConstants.ts';
import HomeScreen from '../screens/home/homeScreen.tsx';
import {useEffect, useState} from 'react';
import {checkFirstLaunch} from '../services/firstLaunchService.ts';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

const RootStack = createStackNavigator();

const AppNavigations = () => {
  const ROOT_STACK_OPTIONS: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const determineInitialRoute = async () => {
      const isFirstTime = await checkFirstLaunch();
      setInitialRoute(
        isFirstTime ? SCREEN_NAMES.ONBOARDING_SCREEN : SCREEN_NAMES.HOME_SCREEN,
      );
    };

    determineInitialRoute();
  }, []);

  if (!initialRoute) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <RootStack.Navigator
      screenOptions={ROOT_STACK_OPTIONS}
      initialRouteName={initialRoute}>
      <RootStack.Screen
        name={SCREEN_NAMES.ONBOARDING_SCREEN}
        component={OnBoarding}
      />
      <RootStack.Screen
        name={SCREEN_NAMES.HOME_SCREEN}
        component={HomeScreen}
      />
    </RootStack.Navigator>
  );
};

export default AppNavigations;
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
