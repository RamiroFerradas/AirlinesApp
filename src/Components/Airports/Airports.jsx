import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import useFectchData from "../../Hooks/useFectchData";
import Navbar from "../../Navbar/Navbar";
import RenderList from "../../RenderList/RenderList";
import Loader from "../Loader/Loader";
import StyledText, { styles } from "../Styles/StyledText";
import { Box, Center, Input, Modal, Button, useToken } from "native-base";
import AirportsByCityRender from "./AirportsByCityRender";
import SearchBar from "./SearchBar";

export default function Airports() {
  const [input, setInput] = useState("");
  const { fetchData, setCity, airportByCity, setAirportByCity, airports } =
    useFectchData(["airports"]);

  const [info, setInfo] = useState(null);

  useEffect(() => {
    const res = airports?.map((e) => {
      return {
        name: e.city,
        id: e.id,
      };
    });
    setInfo(res);
  }, [airports]);

  // console.log(info);

  const listCitys = info?.filter((e) =>
    e.name.toLowerCase().includes(input.toLowerCase())
  );
  // console.log(airportByCity);
  // const listCitys = [...new Set(cityRender)];

  // console.log(listCitys);

  // console.log(cityRender.length);

  return !airports ? (
    <Loader />
  ) : (
    <View>
      <Navbar />
      <StyledText color="secondary" title>
        AIRPORTS IN USA
      </StyledText>
      {airportByCity ? (
        <AirportsByCityRender
          airportByCity={airportByCity}
          setAirportByCity={setAirportByCity}
          setCity={setCity}
        />
      ) : (
        <>
          <SearchBar input={input} setInput={setInput} />
          <RenderList
            data={listCitys?.sort()}
            setCity={setCity}
            section="airports"
          />

          {!listCitys && (
            <StyledText align="center" fontSize="subheading">
              No cities found...
            </StyledText>
          )}
        </>
      )}
    </View>
  );
}
