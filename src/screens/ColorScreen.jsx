import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const Color = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      ></Button>
      <Button
        title="Reset colors"
        onPress={() => {
          setColors([]);
        }}
      ></Button>

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => (
          <View
            style={{
              margin: 5,
              height: 100,
              width: 100,
              backgroundColor: item,
            }}
          ></View>
        )}
      ></FlatList>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});

export default Color;
