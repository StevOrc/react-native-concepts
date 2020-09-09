import React, { useState, UseReducer } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import ColorCounter from "./../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleOnIncreaseDecrease = (color, change) => {
    switch (color) {
      case "red":
        console.log("AAA", red);
        if (red + change > 255) setRed(255);
        else if (red + change < 0) setRed(0);
        else setRed(red + change);
        break;
      case "blue":
        if (blue + change > 255) setBlue(255);
        else if (blue + change < 0) setBlue(0);
        else setBlue(blue + change);
        break;
      case "green":
        if (green + change > 255) setGreen(255);
        else if (green + change < 0) setGreen(0);
        else setGreen(green + change);
        break;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => handleOnIncreaseDecrease("red", COLOR_INCREMENT)}
        onDecrease={() => handleOnIncreaseDecrease("red", COLOR_INCREMENT * -1)}
        color="Red"
        value={red}
      />
      <ColorCounter
        color="Blue"
        value={blue}
        onIncrease={() => handleOnIncreaseDecrease("blue", COLOR_INCREMENT)}
        onDecrease={() =>
          handleOnIncreaseDecrease("blue", COLOR_INCREMENT * -1)
        }
      />
      <ColorCounter
        color="Green"
        value={green}
        onIncrease={() => handleOnIncreaseDecrease("green", COLOR_INCREMENT)}
        onDecrease={() =>
          handleOnIncreaseDecrease("green", COLOR_INCREMENT * -1)
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
