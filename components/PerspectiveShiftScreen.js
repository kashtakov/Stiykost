import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const PerspectiveShiftScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Зміна перспективи</Text>

      {/* Two Columns Section */}
      <View style={styles.row}>
        {/* Controlling What You Can */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Контролювати те, що можна контролювати</Text>
          <Text style={styles.subtitle}>Що?</Text>
          <Text style={styles.paragraph}>Швидке перенесення уваги від речей, які неможливо змінити</Text>
          <Text style={styles.subtitle}>Як?</Text>
          <Text style={styles.paragraph}>Запитайте себе: “Чи можу я це змінити?”</Text>
        </View>

        {/* 5, 5, 5 Method */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>5, 5, 5</Text>
          <Text style={styles.paragraph}>
            Дотримуйтесь бачення проблем у перспективі
          </Text>
          <Text style={styles.paragraph}>
            Як ця подія вплине на моє майбутнє через:
          </Text>
          <Text style={styles.bulletPoint}>• 5 тижнів</Text>
          <Text style={styles.bulletPoint}>• 5 місяців</Text>
          <Text style={styles.bulletPoint}>• 5 років</Text>
        </View>
      </View>

      {/* Footer Icon */}
      <View style={styles.footer}>
        <Text style={styles.footerIcon}>📅</Text>
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
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
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

export default PerspectiveShiftScreen;
