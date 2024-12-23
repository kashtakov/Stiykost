import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const StressManagement = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Робота зі стресовими реакціями під час бойових дій та операцій
      </Text>
      <Text style={styles.subtitle}>
        Для роботи із солдатами, що мають стресові реакції на бойові дії та
        операції, використовуйте принципи 5П та БОПО
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5 П</Text>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>
            • Переконати, що те, що вони переживають - це нормально
          </Text>
          <Text style={styles.item}>
            • Проводити відпочинок якомога ближче до подразників
          </Text>
          <Text style={styles.item}>
            • Поповнити сили сном, водою, їжею
          </Text>
          <Text style={styles.item}>
            • Поновити впевненість за допомогою завдань з цілеспрямованою
            активністю
          </Text>
          <Text style={styles.item}>• Повернення на службу</Text>
        </View>
      </View>

      <View style={styles.circleContainer}>
        <Text style={styles.circleTitle}>
          Допомога повинна бути якомога ближче
        </Text>
        <View style={styles.circleItems}>
          <Text style={styles.circleItem}>
            • Почати роботу, як тільки виникли симптоми
          </Text>
          <Text style={styles.circleItem}>
            • Використовувати прості одно- або двонаправлені завдання
          </Text>
          <Text style={styles.circleItem}>
            • Висловити очікування, що солдат повернеться на службу
          </Text>
        </View>
      </View>

      <Text style={styles.adaptation}>Адаптація під впливом стресу</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5fdf9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2a9d8f",
    marginBottom: 15,
    textShadowColor: "#cdebe8",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginBottom: 25,
  },
  section: {
    marginBottom: 25,
    padding: 15,
    backgroundColor: "#e8f6f3",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00796b",
    marginBottom: 10,
  },
  itemContainer: {
    marginLeft: 10,
  },
  item: {
    fontSize: 16,
    color: "#333",
    marginVertical: 4,
  },
  circleContainer: {
    backgroundColor: "#d1f2e8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  circleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#004d40",
    textAlign: "center",
    marginBottom: 10,
  },
  circleItems: {
    marginLeft: 10,
  },
  circleItem: {
    fontSize: 16,
    color: "#333",
    marginVertical: 4,
  },
  adaptation: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#388e3c",
    marginTop: 20,
    textShadowColor: "#d9f0d8",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default StressManagement;
