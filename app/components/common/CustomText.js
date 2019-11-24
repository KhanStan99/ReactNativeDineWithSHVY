import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

class CustomText extends Component {
  setFontType = type => {
    switch (type) {
      case "style":
        return "cream_peach";
    }
  };
  render() {
    const font = this.setFontType(this.props.type ? this.props.type : "normal");
    const style = [{ fontFamily: font }, this.props.style || {}];
    const alProps = Object.assign({}, this.props, { style: style });
    return (
      <Text {...alProps} style={style}>
        {this.props.children}
      </Text>
    );
  }
}
export default CustomText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "cream_peach"
  }
});
