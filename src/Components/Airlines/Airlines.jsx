import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import useFectchData from "../../Hooks/useFectchData";
import RenderList from "../../RenderList/RenderList";
import StyledText from "../Styles/StyledText";

export default function Airlines() {
  const { airlines } = useFectchData(["airlines"]);

  const info = airlines?.map((e) => e.airline);

  return (
    <View>
      <StyledText aling="center" color="secondary" title>
        AIRLINES
      </StyledText>
      <RenderList data={info} />
    </View>
  );
}