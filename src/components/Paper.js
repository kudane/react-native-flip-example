import React from "react";
import { Animated, StyleSheet, View, TouchableOpacity } from "react-native";
import TextCenter from "./TextCenter";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    position: "absolute", //<= important
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#bdbdbd"
  },
  button: { flex: 1 }
});

const Paper = ({ style, word, handlePress }) => (
  <Animated.View style={[styles.container, style]}>
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0}
      onPress={handlePress}
    >
      <View style={styles.container}>
        <TextCenter>{word}</TextCenter>
      </View>
    </TouchableOpacity>
  </Animated.View>
);

export default Paper;
