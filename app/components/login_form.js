import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Text from "./common/CustomText";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.regfrom}>
        <Text style={styles.smallFont} type="style">
          Dine With
        </Text>
        <Text style={styles.fontSize} type="style">
          SHVY
        </Text>
        <TextInput placeholder="Yay!" />
        <TextInput placeholder="Yay!" />
        <TextInput placeholder="Yay!" />
        <TextInput placeholder="Yay!" />
        <TextInput placeholder="Yay!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regfrom: {
    flex: 1,
    justifyContent: "center"
  },
  fontSize: {
    fontSize: 80
  },
  smallFont: {
    fontSize: 40
  }
});
