import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

function IcoverScreen({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: "#da0d09" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      });
    }, [navigation])
  );

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          Індефікуй побратима, що потребує допомоги
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Контакт</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Обіцянка бути поруч</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Веріфікація фактів</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Етапи подій</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Реалізація</Text>
      </View>
    </View>
  );
}

export default IcoverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#da0d09",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  cardText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
});
