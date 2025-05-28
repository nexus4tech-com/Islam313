import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import OnBoarding from '../screens/onboarding/onBoarding.tsx';
import {SCREEN_NAMES} from '../constants/screenNamesConstants.ts';
import HomeScreen from '../screens/home/homeScreen.tsx';

const Stack = createNativeStackNavigator();

const AppNavigations = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name = {SCREEN_NAMES.ONBOARDING_SCREEN}
        component = {OnBoarding}
      />
      <Stack.Screen
        name = {SCREEN_NAMES.HOME_SCREEN}
        component = {HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigations;
