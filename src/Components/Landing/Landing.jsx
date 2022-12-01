import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigate } from "react-router-native";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <View>
      <StatusBar style="light" />
      <Text>Bienvenido</Text>
      <Button onPress={() => navigate("/airports")} title="GO" />
    </View>
  );
}
