import React, { FC, forwardRef } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps,
  StyleSheet,
  StyleProp,
  TextStyle
} from "react-native";
import { space1 } from "../theme/space.theme";
import { light1, dark1 } from "../theme/color.theme";
import { regular } from "../theme/font-sizes.theme";

interface IProps extends TextInputProps {
  theme?: "standalone";
}

const styles = StyleSheet.create({
  input: {
    minHeight: 48,
    paddingHorizontal: space1,
    backgroundColor: light1,
    fontSize: regular
  }
});

export const TextInput = forwardRef<RNTextInput, IProps>((props, ref) => {
  const themeStyle: StyleProp<TextStyle> = {};
  if (props.theme === "standalone") {
    themeStyle.borderWidth = 1;
    themeStyle.borderColor = dark1;
    themeStyle.borderRadius = 5;
  }
  return (
    <RNTextInput
      {...props}
      ref={ref}
      style={[styles.input, props.style, themeStyle]}
    />
  );
});
