import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Navbar from "../../Navbar/Navbar";
import styles from "./HomeStyles";

export default function Home() {
  return (
    <View style={styles.navBar}>
      <Navbar />
    </View>
  );
}
