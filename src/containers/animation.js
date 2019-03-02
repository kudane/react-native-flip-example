import React, { Component } from "react";
import { Easing, View, Animated, StyleSheet } from "react-native";
import Paper from "../components/Paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  }
});

export default class Animation extends Component {
  state = {
    isAnimatedShowing: false,
    isFlip: true,
    flipUp: new Animated.Value(1),
    flipDown: new Animated.Value(0)
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.isFlip === this.state.isFlip) {
      return false;
    }

    if (nextState.isFlip === true) {
      this.filpAnimated({ flipOpen: true, flipDownValue: 0, flipUpValue: 1 });
    }

    if (nextState.isFlip === false) {
      this.filpAnimated({ flipOpen: false, flipDownValue: 1, flipUpValue: 0 });
    }

    return true;
  }

  filpAnimated = ({ flipOpen, flipDownValue, flipUpValue }) => {
    Animated.sequence([
      Animated.timing(flipOpen ? this.state.flipDown : this.state.flipUp, {
        toValue: flipOpen ? flipDownValue : flipUpValue,
        duration: 150,
        useNativeDriver: true,
        easing: Easing.bezier(0.445, 0.05, 0.55, 0.95)
      }),
      Animated.timing(flipOpen ? this.state.flipUp : this.state.flipDown, {
        toValue: flipOpen ? flipUpValue : flipDownValue,
        duration: 75,
        useNativeDriver: true,
        easing: Easing.bezier(0.445, 0.05, 0.55, 0.95)
      })
    ]).start(() => this.handleAnimatedAtATime(false));
  };

  handleAnimatedAtATime = isAnimatedShowing => {
    this.setState({
      ...this.state,
      isAnimatedShowing
    });
  };

  handleFlip = () => {
    if (this.state.isAnimatedShowing === true) {
      return;
    }

    this.setState({
      ...this.state,
      isFlip: !this.state.isFlip,
      isAnimatedShowing: true
    });
  };

  render() {
    const flipDown = {
      transform: [
        {
          rotateX: this.state.flipUp.interpolate({
            inputRange: [0, 1],
            outputRange: ["90deg", "0deg"]
          })
        }
      ]
    };

    const flipUp = {
      transform: [
        {
          rotateX: this.state.flipDown.interpolate({
            inputRange: [0, 1],
            outputRange: ["-90deg", "0deg"]
          })
        }
      ]
    };

    return (
      <View style={styles.container}>
        <Paper word="hello" handlePress={this.handleFlip} style={flipDown} />
        <Paper word="world" handlePress={this.handleFlip} style={flipUp} />
      </View>
    );
  }
}
