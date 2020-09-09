import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const [isNegative, setIsNegative] = useState(false);

  const handleOnDecrease = () => {
    if (counter - 1 < 0) {
      setCounter(counter);
      setIsNegative(true);
    } else {
      setCounter(counter - 1);
      setIsNegative(false);
    }
  };

  const handleOnIncrease = () => {
    setCounter(counter + 1);
    setIsNegative(false);
  };

  const renderErrorMessage = () => {
    if (isNegative)
      return (
        <Text style={{ color: "red" }}> Counter can not be negative </Text>
      );
  };

  return (
    <View>
      <Button title="Icrease" onPress={() => handleOnIncrease()}></Button>
      <Button title="Decrease" onPress={() => handleOnDecrease()}></Button>
      <Text>Counter Count {counter}</Text>
      {renderErrorMessage()}
    </View>
  );
};

export default CounterScreen;
