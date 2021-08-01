import React from "react";
import { Image, ImageBackground, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Header = {
  headerBackground: () => (
    <ImageBackground
      style={styles.header}
      source={{
        uri: "https://d2vkoy1na2a6o6.cloudfront.net/images/bg_wood_tile.aff07b7098441e60ef43293207da2c2b.jpg",
      }}
    ></ImageBackground>
  ),
  headerTintColor: "#FBCA4E",
  headerTitleStyle: {
    fontFamily: "Belwe-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "Belwe-bold",
  },
};
export const HomeHeader = {
  headerBackground: () => (
    <ImageBackground
      style={styles.header}
      source={{
        uri: "https://d2vkoy1na2a6o6.cloudfront.net/images/bg_wood_tile.aff07b7098441e60ef43293207da2c2b.jpg",
      }}
    ></ImageBackground>
  ),
  headerTintColor: "#FBCA4E",
  headerTitleStyle: {
    fontFamily: "Belwe-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "Belwe-bold",
  },
  headerTitle: () => <Image style={styles.icon} source={require("../../assets/logo.png")} />,
};

export const HeaderIcon = ({ navigation }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return {
    headerLeft: () => (
      <MaterialIcons name="menu" size={28} onPress={() => openMenu()} color="#FBCA4E" />
    ),
    headerLeftContainerStyle: {
      paddingLeft: 16,
    },
  };
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  icon: {
    height: 40,
    width: 40,
  },
});
