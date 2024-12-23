import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import StressManagementScreen from "../components/StressManagementScreen";
import MindfulBreathingScreen from "../components/MindfulBreathingScreen";
import LongFormBreathingScreen from "../components/LongFormBreathingScreen";
import VisualizationScreen from "../components/VisualizationScreen";
import TalkingTechniquesScreen from "../components/TalkingTechniquesScreen";
import PostponingWorriesScreen from "../components/PostponingWorriesScreen";
import PreparatoryMeasuresScreen from "../components/PreparatoryMeasuresScreen";
import WhatMattersNowScreen from "../components/WhatMattersNowScreen";
import PerspectiveShiftScreen from "../components/PerspectiveShiftScreen";
import GroundingScreen from "../components/GroundingScreen";
import ActiveGratitudeScreen from "../components/ActiveGratitudeScreen";

function DrivingScreen({ navigation }) {
  useFocusEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#fad707" },
      headerTintColor: "#fff",
      headerTitleAlign: "center", // Center-align the header title for a consistent style
    });
  });

  return (
    <ScrollView style={styles.container}>
      <StressManagementScreen />
      <MindfulBreathingScreen />
      <LongFormBreathingScreen />
      <VisualizationScreen />
      <TalkingTechniquesScreen />
      <PostponingWorriesScreen />
      <PreparatoryMeasuresScreen />
      <WhatMattersNowScreen />
      <PerspectiveShiftScreen />
      <GroundingScreen />
      <ActiveGratitudeScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDE7", // Soft yellow for a warm and inviting tone
    padding: 16,
  },
});

export default DrivingScreen;
