import { Slot } from "expo-router";
import React from "react";

export const unstable_settings = {
  initialRouteName: "/home",
};
export default function AppStack() {
  return <Slot />;
}
