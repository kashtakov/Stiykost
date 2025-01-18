import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Header from "../text-components/Header";
import TwoColumnParagraph from "../text-components/TwoColunmParagraph";
import StressComponent from "../components/StressComponent";

function StressScreen({ navigation }) {
  useFocusEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#3b019a" },
      headerTintColor: "#fff",
    });
  });

  return (
    <StressComponent/>
  );
}

export default StressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  content: {
    alignItems: "center",
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: "contain",
  },
  bucketImage: {
    width: 220,
    height: 250,
  },
  paragraphContainer: {
    marginTop: 20,
  },
});
