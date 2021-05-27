import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

import ComponentsScreen from "./ComponentsScreen";
import ListScreen from "./ListScreen";
import ImageScreen from "./ImageScreen";
import CounterScreen from "./CounterScreen";
import ColorScreen from "./ColorScreen";

export const pages = {
  Home: HomeScreen,
  Components: ComponentsScreen,
  List: ListScreen,
  Image: ImageScreen,
  Counter: CounterScreen,
  Color: ColorScreen,
};

const HomeScreen = ({ navigation }) => {
  const generateMenu = Object.keys(pages).map((link) => (
    <Button
      key={link}
      onPress={() => {
        navigation.navigate(link);
      }}
      title={`Go to ${link} demo`}
    />
  ));

  return (
    <View>
      <Text style={styles.text}>Main Screen</Text>
      {generateMenu}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    margin: 20,
  },
});

export default HomeScreen;
