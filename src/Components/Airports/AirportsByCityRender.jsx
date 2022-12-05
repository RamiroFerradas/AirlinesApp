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
              <View style={styles.container} key={e.id}>
                <View style={styles.viewIconDelete}>
                  <Icon.Button
                    onPress={() => deleteFunction(e.id)}
                    // key={index}
                    style={styles.icon}
                    name="close"
                    size={15}
                    color="#900"
                  />
                </View>
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
    width: window.width,
    margin: 10,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#888",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  item: {
    padding: 5,
    fontSize: 18,
    height: 44,
  },
  viewIconDelete: {
    flex: 1,
    backgroundColor: "white",
    // marginLeft: 300,
    position: "absolute",
    right: 2,
    top: 10,
    // padding: 5,
  },
  icon: {
    // borderWidth: 4,
    // borderColor: "#888",
    backgroundColor: "white",
    opacity: 1,
  },
});
