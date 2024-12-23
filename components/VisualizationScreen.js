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
        <View style={styles.bulletPointContainer}>
          <Text style={styles.bulletPoint}>• Є можливість регулярно практикувати</Text>
          <Text style={styles.bulletPoint}>• Виконання дає дієвий ефект</Text>
        </View>
      </View>

      {/* Visualization Steps Section */}
      <View style={styles.highlightSection}>
        <Text style={styles.subtitle}>Елементи візуалізації</Text>
        <View style={styles.bulletPointContainer}>
          <Text style={styles.bulletPoint}>• Зробіть вдих і розслабтесь</Text>
          <Text style={styles.bulletPoint}>• Використовуйте різні органи відчуття та тілесні почуття</Text>
          <Text style={styles.bulletPoint}>• Не поспішайте, не прокручуйте вперед, пройдіть кожен крок</Text>
          <Text style={styles.bulletPoint}>• Візуалізуйте успішну роботу</Text>
          <Text style={styles.bulletPoint}>
            • Якщо ви втрачаєте фокус, прийміть це і спробуйте повернутися до вправи
          </Text>
          <Text style={styles.bulletPoint}>• Дотримуйтесь конкретної вправи</Text>
        </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2E7D32',
    marginBottom: 16,
    backgroundColor: '#C8E6C9',
    padding: 10,
    borderRadius: 8,
  },
  section: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#FFFDE7',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  highlightSection: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#FFECB3',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#F57C00',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#424242',
    lineHeight: 22,
    marginBottom: 8,
    textAlign: 'justify',
  },
  bulletPointContainer: {
    marginTop: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#424242',
    lineHeight: 24,
    marginBottom: 6,
  },
});

export default VisualizationScreen;
