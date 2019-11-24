import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Login from "./app/components/login_form";
import * as Font from "expo-font";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      cream_peach: require("./assets/fonts/cream_peach.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? <Login /> : <ActivityIndicator size="large" />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20
  }
});
