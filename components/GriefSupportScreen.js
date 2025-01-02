import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const GriefSupportScreen = () => {
  const points = [
    {
      title: 'Надайте факти',
      description: 'Якщо ви можете, надайте факти про обставини втрати.',
    },
    {
      title: 'Активне слухання',
      description: 'Сконцентруйтесь на ситуації та вислухайте скорботну людину.',
    },
    {
      title: 'Нормалізація',
      description:
        'Не применшуючи втрати, скажіть скорботній людині, що її реакція нормальна та зрозуміла.',
    },
    {
      title: 'Використовуйте ім’я',
      description: 'Не бійтеся називати покійного на ім’я.',
    },
    {
      title: 'Витримка',
      description:
        'Будьте відкритими, щоб вислухати емоційний біль скорботної людини, вам не потрібно «виправляти» її.',
    },
    {
      title: 'Зберігайте власні психологічні межі',
      description:
        'Чиясь втрата не обов\'язково є вашою втратою; ви можете надавати допомогу, не поглинаючи це горе.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Як розмовляти з людиною у скорботі</Text>

      {/* Cards for Each Point */}
      {points.map((point, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{point.title}</Text>
          <Text style={styles.cardDescription}>{point.description}</Text>
        </View>
      ))}
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
  card: {
    padding: 16,
    backgroundColor: '#EAFBF6', // Light green for encouragement
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
});

export default GriefSupportScreen;
