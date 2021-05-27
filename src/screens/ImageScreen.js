import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const imgArray = [
    {
      name: "Beach",
      src: require("../../assets/images/beach.jpg"),
    },
    {
      name: "Forest",
      src: require("../../assets/images/forest.jpg"),
    },
    {
      name: "Mountain",
      src: require("../../assets/images/mountain.jpg"),
    },
  ];

  const images = imgArray.map((imageObj) => {
    const { name, src } = imageObj;
    return <ImageDetail title={name} imageSrc={src} />;
  });

  return <View>{images}</View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;
