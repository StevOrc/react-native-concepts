import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const ListScreen = () => {
  const persons = [
    { name: "Steven", age: 33 },
    { name: "Jejor", age: 34 },
    { name: "Alain", age: 58 },
    { name: "Jocelyne", age: 30 },
    { name: "Josué", age: 6 },
    { name: "Toma", age: 2 },
    { name: "Cindy", age: 25 },
    { name: "Pablito", age: 28 },
    { name: "Serena", age: 13 },
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(person) => person.name}
        data={persons}
        renderItem={({ item }) => {
          return <Text style={style.textStyle}> {item.name} </Text>;
        }}
      ></FlatList>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    margin: 5,
    padding: 5,
  },
});

export default ListScreen;
