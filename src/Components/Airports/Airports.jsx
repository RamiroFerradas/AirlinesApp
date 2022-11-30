import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import useFectchData from "../../Hooks/useFectchData";
import RenderList from "../../RenderList/RenderList";
import Loader from "../Loader/Loader";
import StyledText from "../Styles/StyledText";
import AirportsByCityRender from "./airportsByCityRender";

export default function Airports() {
  const { setCity, airportByCity, setAirportByCity, airports } = useFectchData([
    "airports",
  ]);

  const info = airports?.map((e) => e.city);

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
      <StyledText color="secondary" title>
        AIRPORTS
      </StyledText>
      {airportByCity ? (
        airportsByCityRender()
      ) : (
        <>
          <TextInput
            // style={styles.input}
            placeholder="Search city..."
            // value={searchPhrase}
            // onChangeText={setSearchPhrase}
            // onFocus={() => {
            //   setClicked(true);
            // }}
          />
          <RenderList data={info.sort()} setCity={setCity} />
        </>
      )}
    </View>
  );
}
