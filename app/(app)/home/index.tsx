import { View } from "react-native";
import { Link, Stack } from "expo-router";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ headerShown: true, headerTitle: "Home" }} />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Link href="/home/1">Go to Details 1</Link>
      <Link href="/home/2">Go to Details 2</Link>
      <Link href="/home/3/more">Go to Details 3</Link>
      <Link href="/(settings)">Go to Settings</Link>
    </View>
  );
}
