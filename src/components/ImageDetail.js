import React from "react";
import { View, Text, Image } from "react-native";

const ImageDetail = ({ imageSrc, title }) => {
  return (
    <View>
      <Image source={imageSrc} />
      <Text>{title}</Text>
    </View>
  );
};

export default ImageDetail;
