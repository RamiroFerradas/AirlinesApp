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
    if (condition) {
      const data = airlines?.map((e) => {
        return {
          name: e.airline,
          id: e.id,
        };
      });
      setInfo(data);
      if (typeof airlines === "object") {
        setCondition(true);
      } else {
        setCondition(false);
      }
    }
  }, [airlines]);

  // console.log(condition);
  return (
    <View>
      <Navbar />
      <StyledText aling="center" color="secondary" title>
        AIRLINES
      </StyledText>
      {condition ? (
        <RenderList data={info} section={"airlines"} />
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
