import React from "react";
// import Home from "./src/Components/Home/Home";
import { StatusBar } from "expo-status-bar";
import { NativeRouter, Route, Routes, useLocation } from "react-router-native";
import { NativeBaseProvider } from "native-base";

//Components
import Airlines from "./src/Components/Airlines/Airlines";
import Airports from "./src/Components/Airports/Airports";
import Landing from "./src/Components/Landing/Landing";
import Flights from "./src/Components/Fligths/Flights";
import { View } from "react-native";

export default function App() {
  return (
    <NativeBaseProvider>
      <View>
        <StatusBar animated style="light" />
        <NativeRouter>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/airlines" exact element={<Airlines />} />
            <Route path="/airports" exact element={<Airports />} />
            <Route path="/flights" exact element={<Flights />} />
          </Routes>
        </NativeRouter>
      </View>
    </NativeBaseProvider>
  );
}
