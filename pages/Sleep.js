import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import SleepGuideScreen from "../components/SleepGuideScreen";
import SleepStressGuideScreen from "../components/SleepStressGuideScreen";
import RelaxationTechniquesScreen from "../components/RelaxationTechniquesScreen";

function SleepScreen({ navigation }) {
  useFocusEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#6aa6f9" },
      headerTintColor: "#fff",
    });
  });

  return (
    <ScrollView style={styles.container}>
      <SleepGuideScreen />
      <SleepStressGuideScreen />
      <RelaxationTechniquesScreen />
    </ScrollView>
  );
}

export default SleepScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FDF9", // Soft background for a relaxing theme
    padding: 16, // Adds consistent spacing around content
  },
});
