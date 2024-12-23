import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const MindfulBreathingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Усвідомлене дихання: коротка форма</Text>

      {/* Description Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Що це?</Text>
        <Text style={styles.paragraph}>Повільне, глибоке дихання животом, яке допомагає заспокоїти розум і зосередитися.</Text>
      </View>

      {/* Steps Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Як це робити?</Text>
        <Text style={styles.bulletPoint}>• Візьміть тактичну паузу.</Text>
        <Text style={styles.bulletPoint}>• Зробіть 1-2 усвідомлених подихів.</Text>
        <Text style={styles.bulletPoint}>• Виконайте завдання, залишаючись зосередженими.</Text>
      </View>

      {/* Benefits Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Переваги</Text>
        <Text style={styles.bulletPoint}>• Допомагає зменшити рівень стресу.</Text>
        <Text style={styles.bulletPoint}>• Покращує концентрацію під час виконання важливих завдань.</Text>
        <Text style={styles.bulletPoint}>• Сприяє швидкому відновленню під час напружених ситуацій.</Text>
      </View>

     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF8E1', // Soft yellow background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F57F17',
    marginBottom: 20,
    backgroundColor: '#FFEB3B', // Bright yellow for title background
    padding: 10,
    borderRadius: 8,
  },
  section: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#FFFDE7',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F57F17',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 8,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerIcon: {
    fontSize: 40,
    color: '#F57F17',
  },
});

export default MindfulBreathingScreen;
