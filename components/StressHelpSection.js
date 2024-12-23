import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const StressHelpSection = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Допомога солдату, який перебуває в стресі</Text>

      {/* Steps Section */}
      <View style={styles.section}>
        <Text style={styles.description}>
          Стрес може впливати на емоційний стан та поведінку. Використовуйте ці
          прості дії для допомоги.
        </Text>
        <View style={styles.bulletPointContainer}>
          <Text style={styles.bulletPointIcon}>1.</Text>
          <Text style={styles.bulletPointText}>Розпізнай некорисні думки.</Text>
        </View>
        <View style={styles.bulletPointContainer}>
          <Text style={styles.bulletPointIcon}>2.</Text>
          <Text style={styles.bulletPointText}>Чини їм опір.</Text>
        </View>
      </View>

     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F1F8E9", // Soft greenish-yellow for calming tone
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2E7D32", // Dark green for strong focus
    marginBottom: 16,
    backgroundColor: "#C8E6C9", // Light green background for title
    padding: 12,
    borderRadius: 12,
  },
  section: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#E8F5E9",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  description: {
    fontSize: 16,
    color: "#424242",
    lineHeight: 22,
    marginBottom: 12,
    textAlign: "justify",
  },
  bulletPointContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  bulletPointIcon: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
    marginRight: 8,
  },
  bulletPointText: {
    fontSize: 16,
    color: "#424242",
    lineHeight: 22,
    flex: 1,
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
    padding: 16,
    backgroundColor: "#C8E6C9",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  footerIcon: {
    fontSize: 40,
    color: "#2E7D32",
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#424242",
    marginTop: 8,
  },
});

export default StressHelpSection;
