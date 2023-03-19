import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Ampere from "./ampere";
import List from "./list";
import Voltage from "./voltage";

const Stack = createStackNavigator();
export const IndependentStack = ({ dismiss, LeftButton }) => (
  <NavigationContainer independent>
    <Stack.Navigator initialRouteName={"list"}>
      <Stack.Screen
        name={"list"}
        component={List}
        options={{
          headerLeft: LeftButton,
        }}
      />
      <Stack.Screen name={"ampere"} component={Ampere} />
      <Stack.Screen name={"voltage"} component={Voltage} />
    </Stack.Navigator>
  </NavigationContainer>
);
