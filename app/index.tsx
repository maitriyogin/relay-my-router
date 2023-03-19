import { Redirect, Stack } from "expo-router";
import React from "react";
export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "(app)",
};

export default () =>
  <Redirect href={'/home'} />
