import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Routes from "./routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor={"transparent"} style="light" />
      <Routes />
    </NavigationContainer>
  );
}