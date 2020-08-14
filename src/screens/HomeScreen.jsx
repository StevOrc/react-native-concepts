import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text style={styles.title}>Welcome to the App</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text>Go to List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CustomComponent")}
        >
          <Text>Go To Component</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Image")}>
          <Text>Go To Images</Text>
        </TouchableOpacity>
        <Button
          title="Go to Couner"
          onPress={() => navigation.navigate("Counter")}
        ></Button>
        <Button
          title="Go to Colors"
          onPress={() => navigation.navigate("Colors")}
        ></Button>
        <Button
          title="Go to Square"
          onPress={() => navigation.navigate("Square")}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red",
  },
  title: {
    marginBottom: 25,
    padding: 10,
  },
  btnContainer: {
    minHeight: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default HomeScreen;
