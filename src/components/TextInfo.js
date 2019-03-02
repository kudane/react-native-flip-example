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
    fontSize: 24,
    fontWeight: "bold",
    opacity: 0.3
  }
});

const TextInfo = () => (
  <View style={[styles.container]}>
    <Text style={styles.text}>
      Readme: Click on the paper, !!!Not click this.
    </Text>
  </View>
);

export default TextInfo;
