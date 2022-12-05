import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import useFectchData from "../../Hooks/useFectchData";
import Navbar from "../../Navbar/Navbar";
import RenderList from "../../RenderList/RenderList";
import StyledText from "../Styles/StyledText";

export default function Airlines() {
  const { airlines } = useFectchData(["airlines"]);
  const [info, setInfo] = useState([]);
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    if (typeof airlines === "object") {
      setCondition(true);
    } else {
      setCondition(false);
    }
  }, [airlines]);

  useEffect(() => {
    if (condition) {
      const data = airlines?.map(async (e) => {
        return {
          name: await e.airline,
          id: await e.id,
        };
      });
      setInfo(data);
    }
  }, [condition]);
  // console.log(typeof airlines);
  return (
    <View>
      <Navbar />
      <StyledText aling="center" color="secondary" title>
        AIRLINES
      </StyledText>
      {condition ? (
        <RenderList data={info} section={"airlines"} delete_ />
      ) : (
        <View>
          <StyledText align="center" fontSize="subheading">
            No cities found...
          </StyledText>
        </View>
      )}
    </View>
  );
}
