import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Ampere from "./ampere";
import List from "./list";
import Voltage from "./voltage";

const Stack = createStackNavigator();
export const IndependentStack = ({ dismiss, LeftButton }) => (
  <NavigationContainer independent>
    <Stack.Navigator
      initialRouteName={"list"}
      screenOptions={{
        headerStyle: { backgroundColor: "orange" },
        cardStyle: { backgroundColor: "orange" },
      }}
    >
      <Stack.Screen
        name={"list"}
        component={List}
        options={{
          headerLeft: LeftButton,
          headerTitle: "Independent Stack!",
        }}
      />
      <Stack.Screen
        name={"ampere"}
        component={Ampere}
        options={{ cardStyle: { backgroundColor: "red" } }}
      />
      <Stack.Screen
        name={"voltage"}
        component={Voltage}
        options={{ cardStyle: { backgroundColor: "green" } }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
