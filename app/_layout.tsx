import { Text, View } from "react-native";

import {
  // Import `SplashScreen` from `expo-router` instead of `expo-splash-screen`
  SplashScreen,

  // This example uses a basic Layout component, but you can use any Layout.
  Slot,
  Stack,
  Redirect
} from "expo-router";

import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter";

export default function Layout() {
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
  return <Stack screenOptions={{headerShown:false}}/>;
}