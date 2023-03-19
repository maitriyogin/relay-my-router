import { View } from "react-native";
import { Link, Stack } from "expo-router";

export default function UserSettings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Stack.Screen options={{ headerShown:true, headerTitle:"User Settings"}} />
      <Link href="/user-settings/details">Go to Details</Link>
      <Link href="/user-settings/modal">Go to Preferences</Link>
    </View>
  );
}