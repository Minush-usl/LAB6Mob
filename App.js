import React from 'react';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import Nav from "./components/Nav";
import { StatusBar  } from 'react-native';
StatusBar.setBarStyle('light-content')



const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#000000",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Nav />
    </NavigationContainer>
  )
}