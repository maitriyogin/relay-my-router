import {Stack, Tabs} from "expo-router";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "/app/home",
};
export default function TabsLayout() {
  console.log("----- tabs")

  return (
    <Tabs screenOptions={{headerShown:false}}/>
  );
}