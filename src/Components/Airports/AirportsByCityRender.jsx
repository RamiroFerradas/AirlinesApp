import { ScrollView } from "native-base";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import StyledText from "../Styles/StyledText";

export default function AirportsByCityRender({
  airportByCity,
  setAirportByCity,
  setCity,
}) {
  return (
    <ScrollView>
      {airportByCity?.map((e, index) => {
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
      <Button title="BACK" onPress={() => setAirportByCity(null)} />
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
