import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const TwoColumnParagraph = ({
  data = [],
  columnGap = 10,
  fontSize = 16,
  color = "#333",
  imageStyle = { width: 50, height: 50 },
  style,
}) => {
  const half = Math.ceil(data.length / 2);
  const firstColumn = data.slice(0, half);
  const secondColumn = data.slice(half);

  const renderItem = (item, index) => {
    if (typeof item === "string") {
      return (
        <Text key={index} style={[styles.text, { fontSize, color }]}>
          {item}
        </Text>
      );
    } else if (typeof item === "object" && item.type === "image") {
      return (
        <Image
          key={index}
          source={item.source}
          style={[imageStyle, item.style]}
          resizeMode={item.resizeMode || "contain"}
        />
      );
    } else {
      console.warn(`Unsupported item type at index ${index}:`, item);
      return null;
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.column, { marginRight: columnGap }]}>
        {firstColumn.map(renderItem)}
      </View>
      <View style={styles.column}>{secondColumn.map(renderItem)}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
  },
  text: {
    marginBottom: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default TwoColumnParagraph;
