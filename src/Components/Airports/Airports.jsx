import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import useFectchData from "../../Hooks/useFectchData";
import RenderList from "../../RenderList/RenderList";
import StyledText from "../Styles/StyledText";

export default function Airports() {
  const { airports } = useFectchData(["airports"]);

  const info = airports?.map((e) => e.airport);

  return (
    <View>
      <StyledText color="secondary" title>
        AIRPORTS
      </StyledText>
      <RenderList data={info} />
    </View>
  );
}
