import React from "react";
import { Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

function ComponentsScreen() {
  const greeting = { red: "red" };
  return (
    <View>
      <Text style={styles.text}>Why me?</Text>
      <Text style={styles.text}>{greeting.red}</Text>
    </View>
  );
}

export default ComponentsScreen;
