import React from "react";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import useFectchData from "../Hooks/useFectchData";

export default function Home() {
  const { airlines, airports, fligths } = useFectchData([
    "airlines",
    "airports",
    "flights",
  ]);
  // const { info } = useFectchData("airports");
  console.log(airlines);
  return (
    <>
      <View style={styles.container}>
        <Text> HOLAAA</Text>
        <Text> HOLAAA</Text>

        <StatusBar style="auto" />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
