import React, { FC } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "./text.component";
import { StyleSheet } from "react-native";
import { dark1 } from "../theme/color.theme";
import { space1, minTappableHeight } from "../theme/space.theme";

interface IProps {
  onPress: () => void;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: dark1,
    height: minTappableHeight,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  }
});

export const Button: FC<IProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text color="light1">{children}</Text>
    </TouchableOpacity>
  );
};
