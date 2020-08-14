import React from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import ImageDetails from "./../components/ImageDetails";

const images = [
  { url: "https://picsum.photos/id/1001/200/300", title: "Image 1", score: 5 },
  { url: "https://picsum.photos/id/1002/200/300", title: "Image 2", score: 7 },
  { url: "https://picsum.photos/id/1003/200/300", title: "Image 3", score: 9 },
  { url: "https://picsum.photos/id/1004/200/300", title: "Image 4", score: 8 },
  { url: "https://picsum.photos/id/1005/200/300", title: "Image 5", score: 4 },
  { url: "https://picsum.photos/id/1006/200/300", title: "Image 6", score: 2 },
  { url: "https://picsum.photos/id/1008/200/300", title: "Image 7", score: 7 },
];

const handleOnLike = (title) => {
  console.log(`${title} is touched !!`);
};

const ImageScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {images.map((image) => (
          <ImageDetails key={image.title} item={image} onLike={handleOnLike} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
});

export default ImageScreen;
