import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import IntroductionSection from "../components/IntroductionSection";
import StressHelpSection from "../components/StressHelpSection";
import TableAdaptation from "../assets/tables/TableAdaptation";
import UsefulPhrasesScreen from "../components/UsfulPhrases";
import MentalStateObservationScreen from "../components/MentalStateObservationScreen";
import StressManagement from "../components/StressManagement";
import ProblemSolvingSteps from "../components/ProblemSolvingSteps";
import RelaxationScreen from "../components/RelaxationScreen";
import PsychosisInfoScreen from "../components/PsyhosisInfoScreen";
import SuicideRiskAssessmentScreen from "../components/SuicideRiskAssessmentScreen";
import SuicidePreventionScreen from "../components/SuicidePreventionScreen";

function AdaptationScreen({ navigation }) {
  useFocusEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#0b8725" },
      headerTintColor: "#fff",
    });
  });

  return (
    <ScrollView style={styles.container}>
      <IntroductionSection />
      <TableAdaptation />
      <StressHelpSection />

      {/* Imported Components */}
      <UsefulPhrasesScreen />
      <MentalStateObservationScreen />
      <StressManagement />
      <ProblemSolvingSteps />
      <RelaxationScreen />
      <PsychosisInfoScreen />
      <SuicideRiskAssessmentScreen />
      <SuicidePreventionScreen />
    </ScrollView>
  );
}

export default AdaptationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
});
