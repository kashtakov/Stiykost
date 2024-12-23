import React from "react";
import { Text, StyleSheet } from "react-native";

const Header = ({
  title = "Заголовок",
  fontSize = 24,
  color = "#333",
  textAlign = "center",
  marginVertical = 10,
  style,
}) => {
  return (
    <Text
      style={[
        styles.header,
        { fontSize, color, textAlign, marginVertical },
        style,
      ]}
    >
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
  },
});

export default Header;
