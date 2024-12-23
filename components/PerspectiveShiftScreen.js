import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const PerspectiveShiftScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Зміна перспективи</Text>

      {/* Controlling What You Can Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Контролювати те, що можна контролювати</Text>
        <View style={styles.cardContent}>
          <Text style={styles.subtitle}>Що?</Text>
          <Text style={styles.paragraph}>
            Швидке перенесення уваги від речей, які неможливо змінити.
          </Text>
          <Text style={styles.subtitle}>Як?</Text>
          <Text style={styles.paragraph}>Запитайте себе: “Чи можу я це змінити?”</Text>
        </View>
      </View>

      {/* 5, 5, 5 Method Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>5, 5, 5</Text>
        <View style={styles.cardContent}>
          <Text style={styles.paragraph}>
            Дотримуйтесь бачення проблем у перспективі.
          </Text>
          <Text style={styles.paragraph}>
            Як ця подія вплине на моє майбутнє через:
          </Text>
          <Text style={styles.bulletPoint}>• 5 тижнів</Text>
          <Text style={styles.bulletPoint}>• 5 місяців</Text>
          <Text style={styles.bulletPoint}>• 5 років</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerIcon}>📅</Text>
        <Text style={styles.footerText}>Думайте перспективно</Text>
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
  card: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#FFFDE7',
    borderRadius: 12,
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
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 16,
    color: '#424242',
    lineHeight: 22,
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#424242',
    marginBottom: 4,
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
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#424242',
    marginTop: 8,
  },
});

export default PerspectiveShiftScreen;
