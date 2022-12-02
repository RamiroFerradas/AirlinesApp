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
  high: {
    fontSize: theme.fontSizes.high,
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

  list: {
    padding: 5,
    fontSize: 18,
    height: 44,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    backgroundColor: "#141313d8",
  },
  input: {
    textAlign: "center",
    flex: 1,
  },
  search: {
    // flexDirection: "row",
    // borderBottomWidth: 1,
    // borderColor: "#000",
    paddingVertical: 6,
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
    fontSize === "high" && styles.high,
    fontWeight === "bold" && styles.bold,
    style,
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
