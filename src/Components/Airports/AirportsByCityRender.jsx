import { ScrollView } from "native-base";
import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { deleteFunction } from "../../RenderList/RenderList";
import Icon from "react-native-vector-icons/Ionicons";

import StyledText from "../Styles/StyledText";
import axios from "axios";

export default function AirportsByCityRender({
  airportByCity,
  setAirportByCity,
  setCity,
  setView,
}) {
  const [render, setRender] = useState([]);

  const deleteFunction = async (id) => {
    (await axios.delete(`http://192.168.0.160:3001/airports/${id}`)).data;

    setRender(render?.filter((e) => e.id !== id));
  };

  useEffect(() => {
    setRender(airportByCity);

    // fetchData();
  }, [airportByCity]);

  return (
    <ScrollView>
      {render?.map((e, index) => {
        return (
          <>
            <TouchableWithoutFeedback>
              <View style={styles.container}>
                <StyledText
                  key={index}
                  style={{ width: 140 }}
                  fontWeight="bold"
                  fontSize="subheading"
                  color="primary"
                  align="center"
                >
                  {e.airport}
                </StyledText>

                <Icon.Button
                  onPress={() => deleteFunction(e.id)}
                  // key={index}
                  style={{
                    backgroundColor: "white",
                    opacity: 1,
                  }}
                  name="close"
                  size={15}
                  color="#900"
                />

                <StyledText style={{ marginTop: 20 }} color="secondary">
                  Latitude: {e.latitude}
                </StyledText>
                <StyledText color="secondary">
                  Longitude: {e.longitude}
                </StyledText>
                <StyledText color="secondary" style={{ marginBottom: 20 }}>
                  Satate: {e.state}
                </StyledText>
              </View>
            </TouchableWithoutFeedback>
          </>
        );
      })}
      {!render?.length && (
        <StyledText align="center" fontSize="subheading">
          No Airports found...
        </StyledText>
      )}
      <Button
        title="BACK"
        onPress={() => {
          setAirportByCity(null);
          setView(false);
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 22,
  },
  item: {
    padding: 5,
    fontSize: 18,
    height: 44,
  },
});
