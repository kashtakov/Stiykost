import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const SocialIsolationActionsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <View style={styles.card}>
        <Text style={styles.title}>Соціальна ізоляція: дії для медиків</Text>
      </View>

      {/* Indirect Actions Section */}
      <View style={styles.card}>
        <Text style={styles.columnTitle}>Непрямі дії</Text>
        <Text style={styles.bulletPoint}>• Перевіряйте, як справи у приятелів</Text>
        <Text style={styles.bulletPoint}>• Спостерігайте за ними</Text>
        <Text style={styles.bulletPoint}>• Створюйте можливості, щоб кожен почувався залученим</Text>
        <Text style={styles.bulletPoint}>• Надайте роль кожному солдату</Text>
        <Text style={styles.bulletPoint}>• Згадайте про речі, що викликають занепокоєння, під час бесід з формальним та неформальним лідером</Text>
      </View>

      {/* Direct Actions Section */}
      <View style={styles.card}>
        <Text style={styles.columnTitle}>Прямі дії</Text>
        <Text style={styles.bulletPoint}>• Дізнайтесь, як йдуть справи</Text>
        <Text style={styles.bulletPoint}>• Запитуйте</Text>
        <Text style={styles.bulletPoint}>• Запросіть поїсти разом</Text>
        <Text style={styles.bulletPoint}>• Запросіть особисто на соціальний захід</Text>
        <Text style={styles.bulletPoint}>• Доручіть конкретну роль</Text>
        <Text style={styles.bulletPoint}>• Спостерігайте тривалий час (не одинокий випадок)</Text>
        <Text style={styles.bulletPoint}>• Запропонуйте допомогу</Text>
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
  card: {
    backgroundColor: '#FFECB3',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F57C00',
  },
  columnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F57C00',
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
    lineHeight: 22,
  },
});

export default SocialIsolationActionsScreen;
