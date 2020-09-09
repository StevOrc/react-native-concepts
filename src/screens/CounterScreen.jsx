import React, { UseReducer, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "change_increment":
      return state.counter + action.payload < 0
        ? state
        : { ...state, counter: state.counter + action.payload };
    case "change_decrement":
      return state.counter + action.payload < 0
        ? state
        : { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, disptach] = useReducer(reducer, {
    counter: 0,
    isNegative: false,
  });

  const renderErrorMessage = () => {
    const { isNegative } = state;
    if (isNegative)
      return (
        <Text style={{ color: "red" }}> Counter can not be negative </Text>
      );
  };

  return (
    <View>
      <Button
        title="Icrease"
        onPress={() => disptach({ type: "change_increment", payload: 1 })}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => disptach({ type: "change_increment", payload: -1 })}
      ></Button>
      <Text>Counter Count {state.counter} </Text>
      {/* {renderErrorMessage()} */}
    </View>
  );
};

export default CounterScreen;
