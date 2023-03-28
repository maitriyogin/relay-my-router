import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Link, Stack, Tabs } from "expo-router";
import { Text } from "../components";
export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Home",
        }}
      />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Link href="/1">
        <Text link>Go to Details 1</Text>
      </Link>
      <Link href="/2">
        <Text link>Go to Details 2</Text>
      </Link>
      <Link href="/3/more">
        <Text link>Go to Details 3</Text>
      </Link>
    </View>
  );
}
