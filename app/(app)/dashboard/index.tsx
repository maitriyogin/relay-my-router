import { View } from "react-native";
import { Link, Stack } from "expo-router";

export default function Dashboard() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Stack.Screen options={{ headerShown:true, headerTitle:'Dashboard'}} />
      <Link href="/dashboard/details">Go to Details</Link>
    </View>
  );
}