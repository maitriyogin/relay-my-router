import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Stack, Tabs, useSearchParams } from "expo-router";
import { SignOutButton } from "@components/SignOutButton";

export const unstable_settings = {
  initialRouteName: "home",
};
export default function TabsLayout() {
  console.log("----- tabs layout");
  const params = useSearchParams();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name={"home"}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "home" : "home-outline";
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name={"dashboard"}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "flower" : "flower-outline";
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name={"user-settings"}
        options={{
          tabBarLabel: "User Settings",
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "person" : "person-outline";
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
