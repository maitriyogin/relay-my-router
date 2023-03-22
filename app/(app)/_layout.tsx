import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "home",
};
export default function AppStack() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
