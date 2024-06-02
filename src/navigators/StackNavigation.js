import React from "react";
import HelloScreen from "../screens/HelloScreen";
import { DrawerNavigation } from "./DrawerNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="hello"
        component={HelloScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="drawer"
        component={DrawerNavigation}
      />
    </Stack.Navigator>
  );
}
