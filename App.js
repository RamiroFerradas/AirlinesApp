import React from "react";
import Home from "./src/Components/Home/Home";
import { StatusBar } from "expo-status-bar";
import { NativeRouter, Route, Routes } from "react-router-native";

//Components
import Airlines from "./src/Components/Airlines/Airlines";
import Airports from "./src/Components/Airports/Airports";
import Flights from "./src/Components/Fligths/Flights";
import { View } from "react-native";

export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <NativeRouter>
        <Home />
        <Routes>
          <Route path="/airlines" exact element={<Airlines />} />

          <Route path="/airports" exact element={<Airports />} />
          <Route path="/flights" exact element={<Flights />} />
        </Routes>
      </NativeRouter>
    </View>
  );
}
