import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  spacer: {
    flex: 1
  }
});

export function Spacer() {
  return <View style={styles.spacer} />;
}
