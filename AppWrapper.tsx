import {CustomThemeProvider} from './src/contexts/customThemeContext/themeContextProvider';
import {FontSizeProvider} from './src/contexts/fontSizeContext';
import {SizeScaleProvider} from './src/contexts/sizeScale/sizeScaleContextProvider';
import AppNavigation from './src/navigations/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';

const AppWrapper = () => {
  return (
    <SizeScaleProvider>
      <CustomThemeProvider>
        <FontSizeProvider>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </FontSizeProvider>
      </CustomThemeProvider>
    </SizeScaleProvider>
  );
};

export default AppWrapper;
