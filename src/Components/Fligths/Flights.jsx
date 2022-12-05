import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import useFectchData from "../../Hooks/useFectchData";
import Navbar from "../../Navbar/Navbar";
import RenderList from "../../RenderList/RenderList";
import StyledText from "../Styles/StyledText";

export default function Flights() {
  const { flights } = useFectchData(["flights"]);

  const info = flights?.map((e) => {
    return {
      name: e.flight_number,
      id: e.id,
    };
  });
  return (
    <View>
      <Navbar />
      <StyledText color="secondary" title>
        FLIGHTS
      </StyledText>
      <RenderList data={info} section="flights" delete_ />
    </View>
  );
}
