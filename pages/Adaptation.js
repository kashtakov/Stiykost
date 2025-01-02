import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

// Imported Components
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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Адаптація</Text>
        <Text style={styles.subtitle}>
          Ключові техніки та знання для адаптації під час стресових умов.
        </Text>
      </View>

      <IntroductionSection />
      <TableAdaptation />
      <StressHelpSection />

      {/* Additional Components */}
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
  titleContainer: {
    padding: 16,
    backgroundColor: "#EAFBF6",
    borderBottomWidth: 1,
    borderBottomColor: "#B7D6C5",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0B5725",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#4A4A4A",
    textAlign: "center",
  },
});
