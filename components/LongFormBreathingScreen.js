import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const LongFormBreathingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Усвідомлене дихання: довга форма</Text>

      {/* Description Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Що це?</Text>
        <Text style={styles.paragraph}>Повільні, глибокі вдихи животом для заспокоєння та зосередження.</Text>
      </View>

      {/* Steps Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Як це робити?</Text>
        <Text style={styles.bulletPoint}>• Робіть повільні, глибокі вдихи животом.</Text>
        <Text style={styles.bulletPoint}>
          • Порахуйте до 4 на вдиху, затримайте дихання на 4 секунди.
        </Text>
        <Text style={styles.bulletPoint}>
          • Порахуйте до 4 на видиху, затримайте дихання на 4 секунди.
        </Text>
      </View>

      {/* Breathing Cycle Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/breathe.png')}
          style={styles.image}
        />
        <Text style={styles.imageCaption}>
          Візуалізація дихального циклу: вдих, тримайте, видих, тримайте.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7FDF9', // Soft greenish-yellow for calming tone
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#388E3C', // Calming green for title text
    marginBottom: 20,
    backgroundColor: '#C8E6C9', // Light green for title background
    padding: 10,
    borderRadius: 10,
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
    color: '#FF8F00', // Orange for subtitle to draw attention
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
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
    padding: 16,
    backgroundColor: '#E3F2FD', // Light blue background for the image section
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 12,
    borderRadius: 10,
  },
  imageCaption: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});

export default LongFormBreathingScreen;
