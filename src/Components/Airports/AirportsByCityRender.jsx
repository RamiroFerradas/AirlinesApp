import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import useFectchData from "../../Hooks/useFectchData";
import RenderList from "../../RenderList/RenderList";
import Loader from "../Loader/Loader";
import StyledText from "../Styles/StyledText";

export default function AirportsByCityRender({
  airportByCity,
  setAirportByCity,
}) {
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

  return !airportsCity.length ? (
    <Loader />
  ) : (
    <View>
      <RenderList data={airportsCity} />
      <Button title="BACK" onPress={() => setAirportByCity(null)} />
    </View>
  );
}
