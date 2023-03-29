import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

import { Text } from "@components";
export default function Ampere() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ headerShown: true, headerTitle: "Ampere" }} />
      <Text>Ampere</Text>
    </View>
  );
}
