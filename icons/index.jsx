import React from "react";
import { Image, StyleSheet } from "react-native";

export const HomeIcon = () => {
  return <Image source={require("../assets/icons/logo.png")} style={styles.icon} />;
};
export const DemonHunterIcon = () => {
  return <Image source={require("../assets/icons/demon-hunter-icon.png")} style={styles.icon} />;
};
export const DruidIcon = () => {
  return <Image source={require("../assets/icons/druid-icon.png")} style={styles.icon} />;
};
export const HunterIcon = () => {
  return <Image source={require("../assets/icons/hunter-icon.png")} style={styles.icon} />;
};
export const MageIcon = () => {
  return <Image source={require("../assets/icons/mage-icon.png")} style={styles.icon} />;
};
export const PaladinIcon = () => {
  return <Image source={require("../assets/icons/paladin-icon.png")} style={styles.icon} />;
};
export const PriestIcon = () => {
  return <Image source={require("../assets/icons/priest-icon.png")} style={styles.icon} />;
};
export const RogueIcon = () => {
  return <Image source={require("../assets/icons/rogue-icon.png")} style={styles.icon} />;
};
export const ShamanIcon = () => {
  return <Image source={require("../assets/icons/shaman-icon.png")} style={styles.icon} />;
};
export const WarlockIcon = () => {
  return <Image source={require("../assets/icons/warlock-icon.png")} style={styles.icon} />;
};
export const WarriorIcon = () => {
  return <Image source={require("../assets/icons/warrior-icon.png")} style={styles.icon} />;
};

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
  logo: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
});
