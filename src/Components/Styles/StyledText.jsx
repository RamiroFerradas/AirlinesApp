import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import theme from "./Theme";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  textAlignCenter: {
    textAlign: "center",
  },
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  languaje: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: "orange",
      default: "purple",
    }),
    alignSelf: "flex-start",
    marginVertical: 4,
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
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
  list: {
    padding: 5,
    fontSize: 18,
    height: 44,
  },
  title: {
    textAlign: "center", // <-- the magic
    fontWeight: "bold",
    fontSize: 22,
    backgroundColor: "yellow",
  },
});

export default function StyledText({
  children,
  color,
  fontSize,
  fontWeight,
  align,
  title,
  center,
  style,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    title && styles.title,
    center && styles.center,
    align === "center" && styles.textAlignCenter,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    style,
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
