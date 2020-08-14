import React from "react";
import { Text, StyleSheet } from "react-native";

const name = "Steven";

const CustomComponent = () => {
  return (
    <Text style={style.textStyle}>This component was created by : {name}</Text>
  );
};

const style = StyleSheet.create({
  textStyle: {
    color: "blue",
  },
});

export default CustomComponent;
