import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

const IntroductionSection = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Боротьба з некорисним мисленням</Text>

      {/* Two-Column Layout */}
      <View style={styles.twoColumnContainer}>
        <View style={styles.column}>
          <Text style={styles.paragraph}>
            Під час стресу солдати схильні зосереджуватися на негативі та
            застрягають у некорисних думках. Усвідомлення цих схем та протидія їм
            є ключовою навичкою психічного здоров`я.
          </Text>
        </View>
        <View style={styles.column}>
          <Image
            style={styles.image}
            source={require("../assets/brain.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5", // Neutral background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2E7D32", // Strong green for focus
    marginBottom: 16,
    backgroundColor: "#C8E6C9", // Light green title background
    padding: 12,
    borderRadius: 12,
  },
  twoColumnContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F5E9", // Card background
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
  },
  paragraph: {
    fontSize: 16,
    color: "#424242", // Darker text for contrast
    lineHeight: 24,
    textAlign: "justify",
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default IntroductionSection;
