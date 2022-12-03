import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import StyledText from "../Components/Styles/StyledText";
import Separator from "../Components/Utils/Separator";
import useFectchData from "../Hooks/useFectchData";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { NBox, Box, Center, Pressable } from "native-base";

export default function RenderList({ data, setCity, section }) {
  const { fetchData } = useFectchData(["airlines", "airports"]);

  const [render, setRender] = useState([]);

  const deleteFunction = async (id) => {
    (await axios.delete(`http://192.168.0.160:3001/${section}/${id}`)).data;

    setRender(render?.filter((e) => e.id !== id));
  };
  var hash = {};
  const arr = data?.filter((ele) => {
    var exists = !hash[ele.name];
    hash[ele.name] = true;
    return exists;
  });

  useEffect(() => {
    setRender(arr);
    fetchData();
  }, [data]);

  // const LinearGradient = require("expo-linear-gradient").LinearGradient;
  // const config = {
  //   dependencies: {
  //     "linear-gradient": LinearGradient,
  //   },
  // };
  return !data ? (
    <View>
      <Text>Nada...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={render?.map((e) => e)}
        renderItem={({ item, index }) => (
          <>
            <Pressable
              onPress={() => {
                setCity && setCity(item.name);
              }}
            >
              <Box
                bg="#eab308"
                p={2}
                _text={{
                  fontSize: "md",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                <StyledText
                  // list
                  value={index}
                  name={index}
                  align="center"
                  fontWeight="bold"
                >
                  <> {item.name}</>
                </StyledText>

                <Center
                  // style={{ flex: 1, backgroundColor: "transparent" }}
                  // p={1}

                  position="absolute"
                  right={1.5}
                  // m={1}
                  // _text={{
                  //   color: "white",
                  //   textAlign: "center",
                  //   fontWeight: "700",
                  //   fontSize: "xs",
                  // }}
                >
                  <Icon.Button
                    onPress={() => deleteFunction(item.id)}
                    key={index}
                    style={{
                      backgroundColor: "#eab308",
                      opacity: 1,
                    }}
                    name="close"
                    size={15}
                    color="#900"
                  />
                </Center>
              </Box>
            </Pressable>
            <Separator />
          </>
        )}
      >
        <StyledText fontWeight="bold" fontSize="subheading"></StyledText>
      </FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 3,
    // paddingTop: 22,
  },
  item: {
    // padding: 5,
    fontSize: 18,
    height: 44,
  },
});
