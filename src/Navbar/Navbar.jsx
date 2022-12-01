import { ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { Link, useLocation } from "react-router-native";
import StyledText from "../Components/Styles/StyledText";

import { style } from "./NavbarStyle.jsx";

export default function Navbar() {
  const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation();

    const active = pathname === to;
    const textStyles = [style.appBar.text, active && style.appBar.active];
    return (
      <Link to={to} component={TouchableWithoutFeedback}>
        <StyledText fontWeight="bold" style={textStyles}>
          {children}
        </StyledText>
      </Link>
    );
  };

  return (
    <View style={style.appBar.container}>
      <ScrollView horizontal style={style.appBar.scroll}>
        <AppBarTab to="/airlines">Airlines</AppBarTab>
        <AppBarTab to="/airports">Airports</AppBarTab>
        <AppBarTab to="/flights">Fligths</AppBarTab>
      </ScrollView>
    </View>
  );
}
