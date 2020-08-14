import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title="Icrease" onPress={() => setCounter(counter + 1)}></Button>
      <Button title="Decrease" onPress={() => setCounter(counter - 1)}></Button>
      <Text>Counter Count {counter}</Text>
    </View>
  );
};

export default CounterScreen;