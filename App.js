import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts, OpenSans_400Regular_Italic } from "@expo-google-fonts/open-sans";
import AppLoading from "expo-app-loading";

import Drawer from "./components/Drawer";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Belwe-bold": require("./assets/fonts/belwe-bold-bt.ttf"),
    "Open-sans-italic": OpenSans_400Regular_Italic,
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <NavigationContainer>
      <StatusBar style="light" />
      <Drawer />
    </NavigationContainer>
  );
}
