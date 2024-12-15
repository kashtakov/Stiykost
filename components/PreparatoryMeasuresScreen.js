import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const PreparatoryMeasuresScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Підготовчі заходи & Слова-сигнали</Text>

      {/* Two Columns Section */}
      <View style={styles.row}>
        {/* Preparatory Measures */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Підготовчі заходи</Text>
          <Text style={styles.bulletPoint}>• Використання рутинних дій для входження в "режим роботи"</Text>
          <Text style={styles.bulletPoint}>• Кілька фізичних дій можуть допомогти вам потрапити в потрібний стан</Text>
        </View>

        {/* Cue Words */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Слова-сигнали</Text>
          <Text style={styles.bulletPoint}>• "Залишайся спокійним"</Text>
          <Text style={styles.bulletPoint}>• "Дихай"</Text>
          <Text style={styles.bulletPoint}>• "Копай глибше"</Text>
          <Text style={styles.bulletPoint}>• "Ходімо"</Text>
          <Text style={styles.bulletPoint}>• "Давайте це зробимо"</Text>
        </View>
      </View>

      {/* Footer Icon */}
      <View style={styles.footer}>
        <Text style={styles.footerIcon}>✊</Text>
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
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    backgroundColor: '#FFECB3',
    padding: 10,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  columnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FBC02D',
    marginBottom: 8,
    textAlign: 'center',
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

export default PreparatoryMeasuresScreen;
