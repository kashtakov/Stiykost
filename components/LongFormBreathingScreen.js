import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const LongFormBreathingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Усвідомлене дихання: довга форма</Text>

      {/* Description Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>що?</Text>
        <Text style={styles.paragraph}>повільні, глибокі вдихи животом</Text>
      </View>

      {/* Steps Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>як?</Text>
        <Text style={styles.bulletPoint}>• робіть повільні, глибокі вдихи животом</Text>
        <Text style={styles.bulletPoint}>
          • порахуйте до 4 на вдиху, затримайтеся на 4 секунди
        </Text>
        <Text style={styles.bulletPoint}>
          • порахуйте до 4 на видиху, затримайтеся на 4 секунди
        </Text>
      </View>

      {/* Breathing Cycle Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/200x200.png?text=Breathing+Cycle+Diagram',
          }}
          style={styles.image}
        />
        <Text style={styles.imageCaption}>
          Візуалізація дихального циклу: вдих, тримайте, видих, тримайте
        </Text>
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
  imageContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 8,
  },
  imageCaption: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});

export default LongFormBreathingScreen;
