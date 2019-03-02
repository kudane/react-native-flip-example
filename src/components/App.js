import React from "react";
import { StyleSheet, View } from "react-native";

import Animation from "../containers/animation";
import TextInfo from "../components/TextInfo";

const App = () => (
  <View style={{ flex: 1}}>
    <Animation />
    <TextInfo />
  </View>
);

export default App;
