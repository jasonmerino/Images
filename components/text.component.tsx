import React, { FC } from "react";
import { Text as RNText, TextStyle } from "react-native";
import { fontSizes, IFontSizes } from "../theme/font-sizes.theme";
import { colors, IColor } from "../theme/color.theme";

interface IProps {
  size?: IFontSizes;
  color?: IColor;
}

export const Text: FC<IProps> = ({ children, size, color }) => {
  const style: TextStyle = {
    fontSize: fontSizes[size] || fontSizes.regular,
    color: colors[color] || colors.dark1
  };
  return <RNText style={style}>{children}</RNText>;
};
