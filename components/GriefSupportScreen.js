import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const GriefSupportScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Як розмовляти з людиною у скорботі</Text>

      {/* Guidelines Section */}
      <View style={styles.section}>
        <Text style={styles.bulletPoint}>
          <Text style={styles.bold}>Надайте факти:</Text> Якщо ви можете, надайте факти про обставини втрати.
        </Text>
        <Text style={styles.bulletPoint}>
          <Text style={styles.bold}>Активне слухання:</Text> Сконцентруйтесь на ситуації та вислухайте скорботну людину.
        </Text>
        <Text style={styles.bulletPoint}>
          <Text style={styles.bold}>Нормалізація:</Text> Не применшуючи втрати, скажіть скорботній людині, що її реакція нормальна та зрозуміла.
        </Text>
        <Text style={styles.bulletPoint}>
          <Text style={styles.bold}>Використовуйте ім’я:</Text> Не бійтеся називати покійного на ім’я.
        </Text>
        <Text style={styles.bulletPoint}>
          <Text style={styles.bold}>Витримка:</Text> Будьте відкритими, щоб вислухати емоційний біль скорботної людини, вам не потрібно «виправляти» її.
        </Text>
        <Text style={styles.bulletPoint}>
          <Text style={styles.bold}>Зберігайте власні психологічні межі:</Text> Чиясь втрата не обов'язково є вашою втратою; ви можете надавати допомогу, не поглинаючи це горе.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7FDF9', // Soft background for a soothing tone
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4A148C',
    marginBottom: 20,
    backgroundColor: '#EDE7F6', // Light purple for grief-related context
    padding: 12,
    borderRadius: 10,
  },
  section: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#EAFBF6', // Light green for encouragement
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
    color: '#1B5E20', // Highlighted green for emphasis
  },
});

export default GriefSupportScreen;
