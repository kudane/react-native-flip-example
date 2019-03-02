import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontFamily: "Comfortaa",
    fontSize: 56,
    fontWeight: "300"
  }
});

const TextCenter = ({ children }) => (
  <View style={[styles.container]}>
    <Text style={styles.text}>{children.toUpperCase()}</Text>
  </View>
);

export default TextCenter;
