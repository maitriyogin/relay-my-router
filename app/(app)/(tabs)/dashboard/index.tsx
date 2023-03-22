import { useEffect } from "react";
import { View } from "react-native";
import { Link, Stack, Tabs, useRouter } from "expo-router";
import { Text } from "../../../../components";
export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    router.setParams({ name: "XXXX" });
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Tabs.Screen options={{ headerTitle: "Dashboard" }} />
      <Link href="/dashboard/details">
        <Text link>Go to Details</Text>
      </Link>
    </View>
  );
}
