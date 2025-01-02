import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import CollectiveThinkingScreen from "../components/CollectiveThinkingScreen";
import RiskWarningScreen from "../components/RiskWarningScreen";
import SelfFulfillingProphecyScreen from "../components/SelfFulfillingProphecyScreen";
import SocialIsolationActionsScreen from "../components/SocialIsolationActionsScreen";

function GurtabilityScreen({ navigation }) {
  useFocusEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#f99b10" },
      headerTintColor: "#fff",
    });
  });

  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Згуртованість</Text>
        <Text style={styles.subtitle}>
          Допомога у підтримці колективної згуртованості під час важливих операцій.
        </Text>
      </View>

      {/* Components */}
      <CollectiveThinkingScreen />
      <RiskWarningScreen />
      <SelfFulfillingProphecyScreen />
      <SocialIsolationActionsScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5E1",
  },
  titleContainer: {
    padding: 16,
    backgroundColor: "#FFECB3",
    borderBottomWidth: 1,
    borderBottomColor: "#FFD54F",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E65100",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6D4C41",
    textAlign: "center",
  },
});

export default GurtabilityScreen;
