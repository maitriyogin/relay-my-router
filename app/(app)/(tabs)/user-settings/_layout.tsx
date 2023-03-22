import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs, Stack } from "expo-router";
import { SignOutButton } from "../../../../components/SignOutButton";

export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: true, headerTitle: "User Settings" }}
        />
        <Stack.Screen
          name="details"
          options={{ headerShown: true, headerTitle: "User Details" }}
        />
        <Stack.Screen
          name="preferences"
          options={{
            presentation: "transparentModal",
            animation: "none",
          }}
        />
      </Stack>
    </>
  );
}
