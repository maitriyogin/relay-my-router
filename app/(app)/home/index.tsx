import { View } from "react-native";
import { Link, Stack } from "expo-router";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ headerShown:true, headerTitle:'Home'}} />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Link href="/home/details">Go to Details</Link>
      <Link href="/(settings)">Go to Settings</Link>
    </View>
  );
}