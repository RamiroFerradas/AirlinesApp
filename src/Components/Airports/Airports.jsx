import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import useFectchData from "../../Hooks/useFectchData";
import Navbar from "../../Navbar/Navbar";
import RenderList from "../../RenderList/RenderList";
import Loader from "../Loader/Loader";
import StyledText, { styles } from "../Styles/StyledText";
import { Box, Center, Input, Modal, Button, useToken } from "native-base";

export default function Airports() {
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(true);
  const { setCity, airportByCity, setAirportByCity, airports } = useFectchData([
    "airports",
  ]);
  const info = airports?.map((e) => {
    return {
      key: e.city,
      id: e.id,
    };
  });

  const [viewList, setViewList] = useState(false);

  const cityRender = info?.filter((e) =>
    e.key.toLowerCase().includes(input.toLowerCase())
  );

  const data = [...new Set(cityRender?.sort())];

  const airportsCity = airportByCity?.map((e) => {
    return (
      <>
        <View>
          <StyledText
            style={{ width: 140 }}
            fontWeight="bold"
            fontSize="subheading"
            color="primary"
            align="center"
          >
            {e.airport}
          </StyledText>

          <StyledText style={{ marginTop: 20 }} color="secondary">
            Latitude: {e.latitude}
          </StyledText>
          <StyledText color="secondary">Longitude: {e.longitude}</StyledText>
          <StyledText color="secondary" style={{ marginBottom: 20 }}>
            Satate: {e.state}
          </StyledText>
        </View>
      </>
    );
  });

  const airportsByCityRender = () => (
    <View>
      <RenderList data={airportsCity} setCity={setCity} />
      <Button title="BACK" onPress={() => setAirportByCity(null)} />
    </View>
  );

  return !airports ? (
    <Loader />
  ) : (
    <View>
      <Navbar />

      <StyledText color="secondary" title>
        AIRPORTS IN USA
      </StyledText>
      {airportByCity ? (
        airportsByCityRender()
      ) : (
        <>
          <View style={styles.search}>
            <Center>
              <Box alignItems="center">
                <Input
                  variant="rounded"
                  mx="2"
                  w="100%"
                  style={styles.input}
                  placeholder="Search city..."
                  value={input}
                  onChangeText={setInput}
                  onFocus={() => {
                    setViewList(!viewList);
                  }}
                />
              </Box>
            </Center>
          </View>

          {<RenderList data={data} setCity={setCity} section="airports" />}
          {!data.length && (
            <StyledText align="center" fontSize="subheading">
              No cities found...
            </StyledText>
          )}
        </>
      )}
    </View>
  );
}
