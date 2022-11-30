import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import StyledText from "../Components/Styles/StyledText";
import useFectchData from "../Hooks/useFectchData";

export default function RenderList({ data }) {
  const styles = StyleSheet.create({
    container: {
      // flex: 3,
      paddingTop: 22,
    },
    item: {
      padding: 5,
      fontSize: 18,
      height: 44,
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.map((e) => e)}
        renderItem={({ item }) => (
          <StyledText list align="center" fontWeight="bold">
            {item}
          </StyledText>
        )}
      >
        <StyledText fontWeight="bold" fontSize="subheading"></StyledText>
      </FlatList>
    </View>
  );
}