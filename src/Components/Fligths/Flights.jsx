import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import useFectchData from "../../Hooks/useFectchData";
import RenderList from "../../RenderList/RenderList";
import StyledText from "../Styles/StyledText";

export default function Flights() {
  const { flights } = useFectchData(["flights"]);

  const info = flights?.map((e) => e.flight_number);

  return (
    <View>
      <StyledText color="secondary" title>
        FLIGHTS
      </StyledText>
      <RenderList data={info} />
    </View>
  );
}
