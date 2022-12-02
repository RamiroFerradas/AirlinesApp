import { Box, Center, Input, View } from "native-base";
import React from "react";
import { styles } from "../Styles/StyledText";

export default function SearchBar({ setInput, input }) {
  return (
    <View style={styles.search}>
      <Center>
        <Box alignItems="center">
          <Input
            variant="rounded"
            mx="2"
            w="100%"
            style={styles.input}
            placeholder="Search city..."
            value={input}
            onChangeText={setInput}
          />
        </Box>
      </Center>
    </View>
  );
}
