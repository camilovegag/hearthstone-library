import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CardDetail } from "../../screens/CardDetail";
import { Header, HeaderIcon } from "../../components/Header";

const { Screen, Navigator } = createStackNavigator();

export const StackNavigator = (props) => {
  return (
    <Navigator screenOptions={props.header ? props.header : Header}>
      <Screen name={props.name} component={props.component} options={HeaderIcon} />
      <Screen name="Details" component={CardDetail} options={{ title: "Details" }} />
    </Navigator>
  );
};
