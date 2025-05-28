import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import OnBoarding from '../screens/onboarding/onBoarding.tsx';

const Stack = createNativeStackNavigator();

const AppNavigations = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={OnBoarding} />
      </Stack.Navigator>
  );
};

export default AppNavigations;
