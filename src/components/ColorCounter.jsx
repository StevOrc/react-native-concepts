import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, value, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>
        {color} : {value}{" "}
      </Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`}></Button>
      <Button onPress={() => onDecrease()} title={`Increase ${color}`}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
