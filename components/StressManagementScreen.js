import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const StressManagementScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Управління стресом під час операцій</Text>

      {/* Stress Management Table */}
      <View style={styles.table}>
        {/* Preparation Column */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Підготовка</Text>
          <Text style={styles.bulletPoint}>• Усвідомлене дихання (довга форма)</Text>
          <Text style={styles.bulletPoint}>• Візуалізація</Text>
          <Text style={styles.bulletPoint}>• Розмова з собою</Text>
          <Text style={styles.bulletPoint}>• Розмова з побратимом</Text>
          <Text style={styles.bulletPoint}>• "Відкладання хвилювань"</Text>
        </View>

        {/* Productivity Column */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Продуктивність</Text>
          <Text style={styles.bulletPoint}>• Процедури перед місією</Text>
          <Text style={styles.bulletPoint}>• Слова-сигнали</Text>
          <Text style={styles.bulletPoint}>• Усвідомлене дихання (Коротка форма)</Text>
          <Text style={styles.bulletPoint}>• "Що важливо зараз"</Text>
          <Text style={styles.bulletPoint}>• Контролювати те, що можна контролювати</Text>
          <Text style={styles.bulletPoint}>• "Заземлення"</Text>
        </View>

        {/* Recovery Column */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Відновлення</Text>
          <Text style={styles.bulletPoint}>• Переосмислення</Text>
          <Text style={styles.bulletPoint}>• Дистанціювання: техніка 5,5,5</Text>
          <Text style={styles.bulletPoint}>• Відволікання за задумом</Text>
          <Text style={styles.bulletPoint}>• Активна вдячність</Text>
        </View>
      </View>

      {/* Footer Icon */}
      <View style={styles.footer}>
        <Text style={styles.footerIcon}>🪖</Text>
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
  table: {
    flexDirection: 'row',
    backgroundColor: '#FFF9C4',
    borderRadius: 8,
    overflow: 'hidden',
  },
  column: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: '#FFECB3',
  },
  columnTitle: {
    fontSize: 18,
    fontWeight: '600',
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

export default StressManagementScreen;
