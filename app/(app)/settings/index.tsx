import { Link, Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Text } from "@components";
export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen
        options={{
          presentation: "fullScreenModal",
          headerLeft: () => <Link href="../">Done</Link>,
          headerShown: true,
          headerTitle: "Settings",
        }}
      />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Link href="/settings/ampere">
        <Text link>Go to Amps</Text>
      </Link>
      <Link href="/settings/voltage">
        <Text link>Go to voltage</Text>
      </Link>
    </View>
  );
}
