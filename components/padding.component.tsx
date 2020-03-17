import React, { FC } from "react";
import { ViewStyle, View } from "react-native";

interface IProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  horizontal?: number;
  vertical?: number;
  all?: number;
  style?: ViewStyle;
}

export const Padding: FC<IProps> = ({
  children,
  top,
  right,
  bottom,
  left,
  horizontal,
  vertical,
  all,
  style
}) => {
  const styles: ViewStyle = {};
  if (all !== undefined) {
    styles.padding = all;
  }
  if (vertical !== undefined) {
    styles.paddingVertical = vertical;
  }
  if (horizontal !== undefined) {
    styles.paddingHorizontal = horizontal;
  }
  if (top !== undefined) {
    styles.paddingTop = top;
  }
  if (right !== undefined) {
    styles.paddingRight = right;
  }
  if (bottom !== undefined) {
    styles.paddingBottom = bottom;
  }
  if (left !== undefined) {
    styles.paddingLeft = left;
  }
  return <View style={[style, styles]}>{children}</View>;
};
