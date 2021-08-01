import React from "react";
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { StackNavigator } from "../../routes/HomeStack";
import { Hunter } from "../../screens/Hunter";
import { Home } from "../../screens/Home";
import {
  DemonHunterIcon,
  DruidIcon,
  HomeIcon,
  HunterIcon,
  MageIcon,
  PaladinIcon,
  PriestIcon,
  RogueIcon,
  ShamanIcon,
  WarlockIcon,
  WarriorIcon,
} from "../../icons";
import { DemonHunter } from "../../screens/DemonHunter";
import { Druid } from "../../screens/Druid";
import { Mage } from "../../screens/Mage";
import { Paladin } from "../../screens/Paladin";
import { Priest } from "../../screens/Priest";
import { Rogue } from "../../screens/Rogue";
import { Shaman } from "../../screens/Shaman";
import { Warlock } from "../../screens/Warlock";
import { Warrior } from "../../screens/Warrior";
import { HomeHeader } from "../../components/Header";
import { ImageBackground } from "react-native";

const { Navigator, Screen } = createDrawerNavigator();

export default function Drawer() {
  return (
    <Navigator
      initialRouteName="Home"
      hideStatusBar
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: "#fff",
        labelStyle: {
          fontFamily: "Belwe-bold",
        },
        inactiveTintColor: "#FBCA4E",
      }}
    >
      <Screen
        name="Home"
        options={{
          drawerIcon: () => <HomeIcon />,
        }}
      >
        {() => <StackNavigator component={Home} name="Home" header={HomeHeader} />}
      </Screen>
      <Screen
        name="Demon Hunter"
        options={{
          drawerIcon: () => <DemonHunterIcon />,
        }}
      >
        {() => <StackNavigator component={DemonHunter} name="Demon Hunter" />}
      </Screen>
      <Screen
        name="Druid"
        options={{
          drawerIcon: () => <DruidIcon />,
        }}
      >
        {() => <StackNavigator component={Druid} name="Druid" />}
      </Screen>
      <Screen
        name="Hunter"
        options={{
          drawerIcon: () => <HunterIcon />,
        }}
      >
        {() => <StackNavigator component={Hunter} name="Hunter" />}
      </Screen>

      <Screen
        name="Mage"
        options={{
          drawerIcon: () => <MageIcon />,
        }}
      >
        {() => <StackNavigator component={Mage} name="Mage" />}
      </Screen>
      <Screen
        name="Paladin"
        options={{
          drawerIcon: () => <PaladinIcon />,
        }}
      >
        {() => <StackNavigator component={Paladin} name="Paladin" />}
      </Screen>
      <Screen
        name="Priest"
        options={{
          drawerIcon: () => <PriestIcon />,
        }}
      >
        {() => <StackNavigator component={Priest} name="Priest" />}
      </Screen>
      <Screen
        name="Rogue"
        options={{
          drawerIcon: () => <RogueIcon />,
        }}
      >
        {() => <StackNavigator component={Rogue} name="Rogue" />}
      </Screen>
      <Screen
        name="Shaman"
        options={{
          drawerIcon: () => <ShamanIcon />,
        }}
      >
        {() => <StackNavigator component={Shaman} name="Shaman" />}
      </Screen>
      <Screen
        name="Warlock"
        options={{
          drawerIcon: () => <WarlockIcon />,
        }}
      >
        {() => <StackNavigator component={Warlock} name="Warlock" />}
      </Screen>
      <Screen
        name="Warrior"
        options={{
          drawerIcon: () => <WarriorIcon />,
        }}
      >
        {() => <StackNavigator component={Warrior} name="Warrior" />}
      </Screen>
    </Navigator>
  );
}

const DrawerContent = (props) => {
  return (
    <ImageBackground source={require("../../assets/drawer-bg.png")} style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <DrawerItemList {...props}>
          <DrawerItem />
        </DrawerItemList>
      </DrawerContentScrollView>
    </ImageBackground>
  );
};
