import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

const UsefulPhrasesScreen = () => {
  const sections = [
    {
      title: "Відкриті питання",
      phrases: [
        "Як в тебе справи останнім часом?",
        "Я помітив/помітила, що... Можеш розповісти мені більше про те, що відбувається?",
        "Що ти робив/ла, щоб впоратися зі стресом?",
        "Як вважаєш, ти справляєшся з цією ситуацією?",
      ],
    },
    {
      title: "Уточнювальні питання",
      phrases: [
        "Розкажи про це більше.",
        "Що змушує тебе так думати?",
        "Коли ти це помітив вперше?",
        "Ти виявляв переживав щось подібне?",
      ],
    },
    {
      title: "Підтвердити або підвести підсумки",
      phrases: [
        "Тож, ти говориш, що...",
        "Ти маєш на увазі, що...",
        "Звучить так, що...",
      ],
    },
    {
      title: "Висловити стурбованність (Я-твердження)",
      phrases: [
        "Я переживаю за справи нашої команди.",
        "Мене непокоїть, що ти так багато береш на себе і на інших.",
        "Після того, що сталося, я хотів/хотіла б побачити, як в тебе справи.",
      ],
    },
  ];

  const handlePhrasePress = (phrase) => {
    Alert.alert("Обрано фразу", phrase);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Корисні фрази для оцінки</Text>
      {sections.map((section, index) => (
        <View key={index} style={styles.section}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{section.title}</Text>
          </View>
          {section.phrases.map((phrase, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.phraseContainer}
              onPress={() => handlePhrasePress(phrase)}
            >
              <Text style={styles.text}>{phrase}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fefefe",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2a9d8f",
    marginBottom: 20,
    textShadowColor: "#ddd",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  section: {
    marginBottom: 30,
    padding: 10,
    backgroundColor: "#e9f5f2",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  headerContainer: {
    backgroundColor: "#2a9d8f",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  phraseContainer: {
    backgroundColor: "#f4f9f4",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});

export default UsefulPhrasesScreen;
