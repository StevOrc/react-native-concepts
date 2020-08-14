import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ImageDetails = ({ onLike, item }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onLike(item.title)}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: item.url,
          }}
        />
      </TouchableOpacity>
      <View style={styles.containerTitle}>
        <View>
          <Text> {item.title} </Text>
          <Text> Image score : {item.score} </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 25,
  },
  containerTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

export default ImageDetails;
