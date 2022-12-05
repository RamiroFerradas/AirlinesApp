import { Box, Button, Center, Input, View } from "native-base";
import React, { useRef } from "react";
import { styles } from "../Styles/StyledText";
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";

export default function SearchBar({ setInput, input }) {
  const refInput = useRef();
  return (
    <View style={styles.search2}>
      <View style={{ flex: 4 }}>
        <TextInput
          ref={refInput}
          variant="rounded"
          mx="2"
          w="100%"
          style={styles.input}
          placeholder="Search city..."
          value={input}
          onChangeText={setInput}
        />
      </View>
      <View style={{ flex: 0, backgroundColor: "white" }}>
        <Icon.Button
          style={{
            backgroundColor: "white",
            opacity: 1,
          }}
          onPress={() => {
            refInput.current.clear();
            setInput("");
          }}
          name="close"
          size={15}
          color="#900"
        />
      </View>
    </View>
  );
}
