import { Inter_500Medium, useFonts } from "@expo-google-fonts/inter";

import { SplashScreen, Stack } from "expo-router";

export default function RootLayout() {
  // Load the font `Inter_500Medium`
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    // The native splash screen will stay visible for as long as there
    // are `<SplashScreen />` components mounted. This component can be nested.

    return <SplashScreen />;
  }
  // Render the children routes now that all the assets are loaded.
  return <Stack />;
}
