import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  }
});

export function Row({ children }) {
  return <View style={styles.row}>{children}</View>;
}
