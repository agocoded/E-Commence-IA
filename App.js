
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from './components/start';
import Collections from './components/Collections';

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
      name="Collections"
      component={Collections}
      options={{ title: "Collections" }}
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





