import React, { FC } from "react";
import { ImageBackground, ImageRequireSource, StyleSheet } from "react-native";
import { Text } from "./text.component";

const style = StyleSheet.create({
  image: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    overflow: "hidden"
  }
});

interface IProps {
  image: ImageRequireSource;
  text: string;
}

export const PopularCategory: FC<IProps> = ({ image, text }) => {
  return (
    <ImageBackground resizeMode="cover" source={image} style={style.image}>
      <Text color="light1" size="xlarge">
        {text}
      </Text>
    </ImageBackground>
  );
};
