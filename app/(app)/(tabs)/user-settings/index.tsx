import { View } from "react-native";
import { Link, Stack } from "expo-router";
import { SignOutButton } from "../../../../components/SignOutButton";
import { Text } from "../../../../components";
export default function UserSettings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "User Settings",
        }}
      />
      <Link href="/user-settings/details">
        <Text link>Go to Details</Text>
      </Link>
      <Link href="/user-settings/preferences">
        <Text link>Go to Preferences</Text>
      </Link>
    </View>
  );
}
