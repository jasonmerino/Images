import React from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { IPixabayHit } from "../types/pixabay-types";
import { space1 } from "../theme/space.theme";
import { Row } from "./row.component";
import { Spacer } from "./spacer.component";
import { lightAlpha7 } from "../theme/color.theme";

const styles = StyleSheet.create({
  likes: {
    backgroundColor: lightAlpha7,
    padding: space1,
    margin: space1,
    borderRadius: 5
  }
});

export function SearchItem({ item }: { item: IPixabayHit }) {
  return (
    <ImageBackground
      key={item.webformatURL}
      resizeMode="cover"
      source={{ uri: item.webformatURL }}
      style={{
        height: 300, // this is just based on what looks decent for now
        width: "100%"
      }}
    >
      <Spacer />
      <Row>
        <Spacer />
        <View style={styles.likes}>
          <Text>❤️ {item.likes}</Text>
        </View>
      </Row>
    </ImageBackground>
  );
}
