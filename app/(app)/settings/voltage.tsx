import {Link, Stack} from "expo-router";
import React from "react";
import {View} from "react-native";

export default function Voltage(){
  return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Stack.Screen options={{ headerShown:true, headerTitle:'Voltage'}} />
  </View>
}
