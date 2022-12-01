import { StyleSheet } from "react-native";

export default function HomeStyles() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    navBar: { flex: 1 },
  });

  return { styles };
}
