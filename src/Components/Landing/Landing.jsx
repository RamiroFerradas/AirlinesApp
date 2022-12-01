import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigate } from "react-router-native";
import StyledText from "../Styles/StyledText";
import { Box, NativeBaseProvider, Center } from "native-base";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/imagenes/photo-1500835556837-99ac94a94552.jpg")}
        imageStyle={{ resizeMode: "stretch" }}
        style={styles.img}
      >
        <StatusBar style="light" />
        <StyledText style={styles.text} fontSize="high" fontWeight="bold">
          Bienvenido
        </StyledText>
        <View style={styles.button}>
          <Button
            onPress={() => navigate("/airports")}
            title="GO"
            color="#5741ff"
          />
        </View>
      </ImageBackground>
    </View>
  );
}

let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: ScreenHeight - 150,

    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    marginBottom: 10,
  },
  navBar: { flex: 1 },
  button: [
    {
      width: "80%",
      margin: 10,
      backgroundColor: "red",
      borderRadius: 250,
    },
  ],
  img: {
    flex: 1,
    resizeMode: "contain",
    width: "120%",
    height: ScreenHeight + 35,
    alignItems: "center",
    justifyContent: "center",
  },
});
