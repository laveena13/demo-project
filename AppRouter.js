import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeScreen
} from "./screens";
import {
  EmployeeDetailsScreen
} from "./screens";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import {View} from "react-native";

const Stack = createStackNavigator();

function AppRouter () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EmployeeDetails" component={EmployeeDetailsScreen} />
          <Stack.Screen name="Root" component={BottomTabNavigator} />

      </Stack.Navigator>
    </NavigationContainer>




  );
}

export default AppRouter;
