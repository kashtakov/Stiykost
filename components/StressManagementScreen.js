import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const StressManagementScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Управління стресом під час операцій</Text>

      {/* Preparation Section */}
      <View style={[styles.section, styles.preparationSection]}>
        <Text style={styles.sectionTitle}>Підготовка</Text>
        <Text style={styles.bulletPoint}>• Усвідомлене дихання (довга форма)</Text>
        <Text style={styles.bulletPoint}>• Візуалізація</Text>
        <Text style={styles.bulletPoint}>• Розмова з собою</Text>
        <Text style={styles.bulletPoint}>• Розмова з побратимом</Text>
        <Text style={styles.bulletPoint}>• "Відкладання хвилювань"</Text>
      </View>

      {/* Productivity Section */}
      <View style={[styles.section, styles.productivitySection]}>
        <Text style={styles.sectionTitle}>Продуктивність</Text>
        <Text style={styles.bulletPoint}>• Процедури перед місією</Text>
        <Text style={styles.bulletPoint}>• Слова-сигнали</Text>
        <Text style={styles.bulletPoint}>• Усвідомлене дихання (Коротка форма)</Text>
        <Text style={styles.bulletPoint}>• "Що важливо зараз"</Text>
        <Text style={styles.bulletPoint}>• Контролювати те, що можна контролювати</Text>
        <Text style={styles.bulletPoint}>• "Заземлення"</Text>
      </View>

      {/* Recovery Section */}
      <View style={[styles.section, styles.recoverySection]}>
        <Text style={styles.sectionTitle}>Відновлення</Text>
        <Text style={styles.bulletPoint}>• Переосмислення</Text>
        <Text style={styles.bulletPoint}>• Дистанціювання: техніка 5,5,5</Text>
        <Text style={styles.bulletPoint}>• Відволікання за задумом</Text>
        <Text style={styles.bulletPoint}>• Активна вдячність</Text>
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
    color: '#F57F17',
    marginBottom: 20,
  },
  section: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  preparationSection: {
    backgroundColor: '#FFFDE7',
  },
  productivitySection: {
    backgroundColor: '#FFECB3',
  },
  recoverySection: {
    backgroundColor: '#FFCC80',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F57F17',
    marginBottom: 12,
    textAlign: 'center',
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 6,
  },
  footer: {
    alignItems: 'center',
    marginTop: 16,
  },
  footerIcon: {
    fontSize: 36,
    color: '#F57F17',
  },
});

export default StressManagementScreen;
