import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import theme from "../Components/Styles/Theme";

export const style = StyleSheet.create({
  appBar: {
    container: {
      backgroundColor: theme.appBar.primary,
      paddingTop: Constants.statusBarHeight + 10,
      paddingBottom: 10,
      // flexDirection: "row",
      textAling: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: theme.appBar.textSecondary,
      paddingHorizontal: 25,
    },
    scroll: { paddingBottom: 10 },
    active: {
      color: theme.appBar.textPrimary,
    },
  },
});
