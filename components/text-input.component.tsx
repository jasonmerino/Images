import React from "react";
import {
  TextInput as RNTextInput,
  TextInputProps,
  StyleSheet
} from "react-native";
import { space1 } from "../theme/space.theme";
import { light1 } from "../theme/color.theme";
import { regular } from "../theme/font-sizes.theme";

const styles = StyleSheet.create({
  input: {
    minHeight: 48,
    paddingHorizontal: space1,
    backgroundColor: light1,
    fontSize: regular
  }
});

export function TextInput(props: TextInputProps) {
  return <RNTextInput {...props} style={[styles.input, props.style]} />;
}
