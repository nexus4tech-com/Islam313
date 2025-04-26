import { CustomThemeProvider } from "./src/contexts/customThemeContext/themeContextProvider"
import { FontSizeProvider } from "./src/contexts/fontSizeContext"
import { SizeScaleProvider } from "./src/contexts/sizeScale/sizeScaleContextProvider"
import AppNavigation from "./src/navigations/AppNavigation"

const AppWrapper = () => {
  return (
    <SizeScaleProvider>
      <CustomThemeProvider>
        <FontSizeProvider>
          <AppNavigation/>
        </FontSizeProvider>
      </CustomThemeProvider>
    </SizeScaleProvider>
  )
}

export default AppWrapper;