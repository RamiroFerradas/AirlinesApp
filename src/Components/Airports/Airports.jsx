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
import Navbar from "../../Navbar/Navbar";
import RenderList from "../../RenderList/RenderList";
import Loader from "../Loader/Loader";
import StyledText, { styles } from "../Styles/StyledText";

export default function Airports() {
  const [input, setInput] = useState("");

  const { setCity, airportByCity, setAirportByCity, airports } = useFectchData([
    "airports",
  ]);
  const info = airports?.map((e) => e.city);

  const cityRender = info?.filter((e) =>
    e.toLowerCase().includes(input.toLowerCase())
  );
  const data = [...new Set(cityRender)];

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
        AIRPORTS
      </StyledText>
      {airportByCity ? (
        airportsByCityRender()
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Search city..."
            value={input}
            onChangeText={setInput}
            onFocus={() => {
              console.log("hola");
            }}
          />

          <RenderList data={data?.sort()} setCity={setCity} />
        </>
      )}
    </View>
  );
}
