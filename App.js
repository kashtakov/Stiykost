import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

function HomeScreen(){
  return(
    <Text>Home</Text>
  );
}

function ProfileScreen(){
  return(
    <Text>Profile</Text>
  );
}

const Drawer = createDrawerNavigator();

export default function App(){
  return(
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Profile" component={ProfileScreen}/>
    </Drawer.Navigator>
  </NavigationContainer>)
}