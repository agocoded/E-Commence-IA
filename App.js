
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from './components/start';
import Collections from './components/Collections';
import afri from './collections/afri';
import cart from './components/cart';
import login from './components/login';
import signup from './components/signup';
import home from './components/home';

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
      name="login"
      component={login}
      options={{ title: "" },{header: () => null}}
      />

      <Stack.Screen
      name="signup"
      component={signup}
      options={{ title: "" },{header: () => null}}
      />

      <Stack.Screen
      name="home"
      component={home}
      options={{ title: "" },{header: () => null}}
      />

      <Stack.Screen
      name="Collections"
      component={Collections}
      // options={{ title: "Collections" }}
      options={{ title: "" },{header: () => null}}
      />

      <Stack.Screen
      name="afri"
      component={afri}
      // options={{ title: "African Dishes " }}
      options={{ title: "" },{header: () => null}}
      />

      <Stack.Screen
      name="cart"
      component={cart}
      // options={{ title: "African Dishes " }}
      options={{ title: "" },{header: () => null}}
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





