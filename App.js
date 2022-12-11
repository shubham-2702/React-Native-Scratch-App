import React from "react";
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import Draggable from 'react-native-draggable';
import Header from "./components/Header";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import getSlideFromRightTransition from "./config";

import Code from './components/Code'
import SpriteSelect from './components/selectSprite'

console.disableYellowBox = true;

const router = createStackNavigator({
  Code,
  SpriteSelect
},{
  headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
    path: "Code",
    initialRouteName: "Code",
    transitionConfig: getSlideFromRightTransition,
}, {
    defaultNavigationOptions: {
    header: null,
    headerLeft: null,
    headerRight: null,
    }
});


const AppNavigator = createAppContainer(router)

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}