import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const PreparatoryMeasuresScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Підготовчі заходи & Слова-сигнали</Text>

      {/* Two Cards Section */}
      <View style={styles.cardsContainer}>
        {/* Preparatory Measures Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Підготовчі заходи</Text>
          <View style={styles.cardContent}>
            <Text style={styles.bulletPoint}>
              • Використання рутинних дій для входження в "режим роботи"
            </Text>
            <Text style={styles.bulletPoint}>
              • Кілька фізичних дій можуть допомогти вам потрапити в потрібний стан
            </Text>
          </View>
        </View>

        {/* Cue Words Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Слова-сигнали</Text>
          <View style={styles.cardContent}>
            <Text style={styles.bulletPoint}>• "Залишайся спокійним"</Text>
            <Text style={styles.bulletPoint}>• "Дихай"</Text>
            <Text style={styles.bulletPoint}>• "Копай глибше"</Text>
            <Text style={styles.bulletPoint}>• "Ходімо"</Text>
            <Text style={styles.bulletPoint}>• "Давайте це зробимо"</Text>
          </View>
        </View>
      </View>

     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2E7D32',
    marginBottom: 16,
    backgroundColor: '#C8E6C9',
    padding: 12,
    borderRadius: 8,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFDE7',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F57C00',
    marginBottom: 12,
    textAlign: 'center',
  },
  cardContent: {
    marginTop: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#424242',
    marginBottom: 8,
    lineHeight: 22,
  },
  footer: {
    alignItems: 'center',
    marginTop: 16,
    padding: 12,
    backgroundColor: '#C8E6C9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  footerIcon: {
    fontSize: 32,
    color: '#2E7D32',
  },
});

export default PreparatoryMeasuresScreen;
