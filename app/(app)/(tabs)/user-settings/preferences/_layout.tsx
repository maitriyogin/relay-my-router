import { Slot, Stack } from "expo-router";
import React from "react";

export default () => (
  <>
    <Stack.Screen options={{ headerTitle: "Preferences" }} />
    <Slot />
  </>
);
