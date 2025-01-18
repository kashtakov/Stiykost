import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

const StressComponent = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <Text style={styles.title}>Компас стійкості</Text>

      {/* Stress Compass Section */}
      <View style={styles.card}>
       
        <Image
          source={require("../assets/images/compass.png")}
          style={styles.image}
        />
        <Text style={styles.paragraph}>
          Стрес компас допомагає орієнтуватися у складних ситуаціях. Використовуйте його для підтримки емоційної стійкості.
        </Text>
      </View>

      {/* Stress Bucket Section */}
      <Text style={styles.title}>Відро стресу</Text>

      <View style={styles.card}>
        
        <Image
          source={require("../assets/images/bucket.png")}
          style={styles.image}
        />
        <Text style={styles.paragraph}>
          Стрес ллється у відро. Якщо відро переповнено, це може спричинити
          емоційний зрив. Добре справлятися = задіяти кран випуску стресу. Погано
          справлятися = не задіяти кран та наповнювати відро.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F7FDF9",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1976D2",
    marginBottom: 20,
    textShadowColor: "#CDEBE8",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  card: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#EAFBF6",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#388E3C",
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 12,
    borderRadius: 10,
  },
});

export default StressComponent;
