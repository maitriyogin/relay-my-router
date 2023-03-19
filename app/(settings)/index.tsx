import {Link, Stack} from "expo-router";
import React from "react";
import {View} from "react-native";

export default function Index() {
  return <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    {/* Use the `Screen` component to configure the layout. */}
    <Stack.Screen options={{ presentation:'fullScreenModal', headerBackTitle:'Home', headerLeft:() =>
      <Link href="../">Done</Link>
    , headerShown: true, headerTitle: 'Settings'}}/>
    {/* Use the `Link` component to enable optimized client-side routing. */}
    <Link href="/ampere">Go to Amps</Link>
    <Link href="/voltage">Go to voltage</Link>
  </View>
}
