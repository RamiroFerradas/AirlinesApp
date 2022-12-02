import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import StyledText from "../Components/Styles/StyledText";
import Separator from "../Components/Utils/Separator";
import useFectchData from "../Hooks/useFectchData";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";

export default function RenderList({ data, setCity, section }) {
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
  console.log(section);
  const deleteFunction = async (id) => {
    // console.log(id);
    const res = (
      await axios.delete(`http://192.168.0.160:3001/${section}/${id}`)
    ).data;
    return res;
  };

  console.log(data);
  return (
    <View style={styles.container}>
      <FlatList
        data={data?.map((e) => e)}
        renderItem={({ item }) => (
          <>
            <StyledText
              list
              key={item.id}
              // value={item.key}
              // name={item.key}
              align="center"
              onPress={() => setCity && setCity(item)}
              fontWeight="bold"
            >
              <> {item.key}</>
              <Icon.Button
                style={{
                  backgroundColor: "white",
                  opacity: 1,
                }}
                name="close"
                size={15}
                color="#900"
                onPress={() => deleteFunction(item.id)}
              />
              {/* {console.log(item.id)} */}
            </StyledText>
            <Separator />
          </>
        )}
      >
        <StyledText fontWeight="bold" fontSize="subheading"></StyledText>
      </FlatList>
    </View>
  );
}
