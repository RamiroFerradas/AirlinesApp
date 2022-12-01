import React from "react";
import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import StyledText from "../Styles/StyledText";

export default function Loader() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={100} color="#bc5800" />
    </View>
  );
}

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: null,
    backgroundColor: "black",
    // padding: 200,
  },
  horizontal: {
    height: ScreenHeight + 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
