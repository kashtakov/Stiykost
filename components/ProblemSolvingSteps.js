import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ProblemSolvingSteps = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Вирішення проблем</Text>
      <Text style={styles.description}>
        Допоможіть солдатам вирішити проблеми, які посилюють їхній стрес, навчаючи їх дотримуватися систематичних кроків
      </Text>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerCell]}>
            Крок до вирішення проблеми
          </Text>
          <Text style={[styles.cell, styles.headerCell]}>Опис</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Визначити проблему</Text>
          <Text style={styles.cell}>визначити, що потребує виправлення</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Знайти альтернативи</Text>
          <Text style={styles.cell}>
            зберіть якомога більше можливих варіантів
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Прийняти рішення про те, що робити</Text>
          <Text style={styles.cell}>
            порівняйте альтернативи між собою та оберіть найкраще рішення
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Здійснити дію</Text>
          <Text style={styles.cell}>створіть план та приведіть його в дію</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Проаналізувати зроблене</Text>
          <Text style={styles.cell}>
            оцініть результати, щоб краще підготуватися у майбутньому
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2a9d8f",
    marginBottom: 12,
    textShadowColor: "#e0f2e9",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  table: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
  },
  headerRow: {
    backgroundColor: "#2a9d8f",
  },
  cell: {
    flex: 1,
    padding: 12,
    textAlign: "center",
    fontSize: 14,
    color: "#333",
  },
  headerCell: {
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default ProblemSolvingSteps;
