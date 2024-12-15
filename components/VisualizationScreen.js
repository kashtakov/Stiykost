import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const VisualizationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Візуалізація</Text>

      {/* What is Visualization Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Що це таке?</Text>
        <Text style={styles.paragraph}>Цілеспрямоване формування ментальних образів</Text>
      </View>

      {/* Why it Helps Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Чому це допомагає з продуктивністю та тривогою?</Text>
        <Text style={styles.bulletPoint}>• Є можливість регулярно практикувати</Text>
        <Text style={styles.bulletPoint}>• Виконання дає дієвий ефект</Text>
      </View>

      {/* Visualization Steps Section */}
      <View style={styles.highlightSection}>
        <Text style={styles.subtitle}>Елементи візуалізації</Text>
        <Text style={styles.bulletPoint}>• Зробіть вдих і розслабтесь</Text>
        <Text style={styles.bulletPoint}>• Використовуйте різні органи відчуття та тілесні почуття</Text>
        <Text style={styles.bulletPoint}>• Не поспішайте, не прокручуйте вперед, пройдіть кожен крок</Text>
        <Text style={styles.bulletPoint}>• Візуалізуйте успішну роботу</Text>
        <Text style={styles.bulletPoint}>• Якщо ви втрачаєте фокус, прийміть це і спробуйте повернутися до вправи</Text>
        <Text style={styles.bulletPoint}>• Дотримуйтесь конкретної вправи</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF8E1',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 16,
    backgroundColor: '#FFEB3B',
    padding: 10,
  },
  section: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#FFFDE7',
    borderRadius: 8,
  },
  highlightSection: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#FFECB3',
    borderRadius: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FBC02D',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
});

export default VisualizationScreen;
