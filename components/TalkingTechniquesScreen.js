import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const TalkingTechniquesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Розмова з собою vs Розмова з товаришем</Text>

      {/* Two Columns Section */}
      <View style={styles.row}>
        {/* Talking to Yourself */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Розмова з собою</Text>
          <Text style={styles.subtitle}>Що?</Text>
          <Text style={styles.paragraph}>Тренування себе</Text>
          <Text style={styles.subtitle}>Як?</Text>
          <Text style={styles.bulletPoint}>• Використовуйте мотивуючі слова або фрази, які підвищать впевненість у собі</Text>
          <Text style={styles.bulletPoint}>• Обговоріть з собою процедуру виконання завдання</Text>
        </View>

        {/* Talking to a Teammate */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Розмова з товаришем</Text>
          <Text style={styles.subtitle}>Що?</Text>
          <Text style={styles.paragraph}>Тренування свого побратима</Text>
          <Text style={styles.subtitle}>Як?</Text>
          <Text style={styles.bulletPoint}>• Мотиваційно: "у тебе все вийде"</Text>
          <Text style={styles.bulletPoint}>
            • Інструкційно: "масивна кровотеча, дихальні шляхи, дихання, кровообіг, черепно-мозкова травма/гіпотермія"
          </Text>
        </View>
      </View>

      {/* Footer Icon */}
      <View style={styles.footer}>
        <Text style={styles.footerIcon}>💬</Text>
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

export default TalkingTechniquesScreen;
