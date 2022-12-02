import React from "react";
import { StyleSheet, View } from "react-native";
import useFectchData from "../../Hooks/useFectchData";
import Navbar from "../../Navbar/Navbar";
import RenderList from "../../RenderList/RenderList";
import StyledText from "../Styles/StyledText";

export default function Airlines() {
  const { airlines } = useFectchData(["airlines"]);

  const info = airlines?.map((e) => {
    return {
      key: e.airline,
      id: e.id,
    };
  });

  return (
    <View>
      <Navbar />

      <StyledText aling="center" color="secondary" title>
        AIRLINES
      </StyledText>
      <RenderList data={info} section={"airlines"} />
    </View>
  );
}
