import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const MindfulBreathingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Усвідомлене дихання: коротка форма</Text>

      {/* Description Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Що?</Text>
        <Text style={styles.paragraph}>Повільне, глибоке дихання животом</Text>
      </View>

      {/* Steps Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Як?</Text>
        <Text style={styles.bulletPoint}>• Візьміть тактичну паузу</Text>
        <Text style={styles.bulletPoint}>• Зробіть 1-2 усвідомлених подихів</Text>
        <Text style={styles.bulletPoint}>• Виконайте завдання</Text>
      </View>

      {/* Footer Icon */}
      <View style={styles.footer}>
        <Text style={styles.footerIcon}>🌬️</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 16,
    backgroundColor: '#FFEB3B',
    padding: 8,
  },
  section: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#FFFDE7',
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
  footer: {
    alignItems: 'center',
    marginTop: 16,
  },
  footerIcon: {
    fontSize: 32,
    color: '#FBC02D',
  },
});

export default MindfulBreathingScreen;
