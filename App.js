
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from './components/start';
import Items from './components/Items';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen
      name="Getting Started"
      component={Start}
      options={{ title: "" },{header: () => null}}
      />
      <Stack.Screen
      name="Items"
      component={Items}
      options={{ title: "Ads" }}
      />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});





