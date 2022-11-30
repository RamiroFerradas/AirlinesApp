import React from "react";
import { ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { Link, useLocation } from "react-router-native";
import StyledText, { styles } from "../Components/Styles/StyledText";

export default function Navbar() {
  const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation();

    const active = pathname === to;
    const textStyles = [styles.appBar.text, active && styles.appBar.active];
    return (
      <Link to={to} component={TouchableWithoutFeedback}>
        <StyledText fontWeight="bold" style={textStyles}>
          {children}
        </StyledText>
      </Link>
    );
  };

  return (
    <View style={styles.appBar.container}>
      <ScrollView horizontal style={styles.appBar.scroll}>
        <AppBarTab to="/airlines">Airlines</AppBarTab>
        <AppBarTab to="/airports">Airports</AppBarTab>
        <AppBarTab to="/flights">Fligths</AppBarTab>
      </ScrollView>
    </View>
  );
}
