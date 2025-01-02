import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Header from "../text-components/Header";
import TwoColumnParagraph from "../text-components/TwoColunmParagraph";

function StressScreen({ navigation }) {
  useFocusEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#3b019a" },
      headerTintColor: "#fff",
    });
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Compass Section */}
        <Header
          title="Компас стійкості"
          fontSize={32}
          color="#FF6347"
          textAlign="center"
          style={styles.header}
        />
        <Image
          source={require("../assets/images/compass.png")}
          style={styles.image}
        />

        {/* Stress Bucket Section */}
        <Header
          title="Відро стресу"
          fontSize={32}
          color="#FF6347"
          textAlign="center"
          style={styles.header}
        />
        <TwoColumnParagraph
          data={[
            { type: "image", source: require("../assets/images/bucket.png") },
            "Стрес ллється у відро. Якщо відро переповнено, проблеми спричиняють емоційний зрив. Добре справлятися = задіяти кран випуску стресу. Погано справлятися = не задіяти кран та наповнювати відро.",
          ]}
          columnGap={15}
          fontSize={18}
          color="#000"
          imageStyle={styles.bucketImage}
          style={styles.paragraphContainer}
        />
      </View>
    </ScrollView>
  );
}

export default StressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  content: {
    alignItems: "center",
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: "contain",
  },
  bucketImage: {
    width: 220,
    height: 250,
  },
  paragraphContainer: {
    marginTop: 20,
  },
});
