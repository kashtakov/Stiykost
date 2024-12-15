import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const SocialIsolationActionsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Соціальна ізоляція: дії для медиків</Text>

      {/* Two Columns Section */}
      <View style={styles.row}>
        {/* Indirect Actions Column */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Непрямі дії</Text>
          <Text style={styles.bulletPoint}>• Перевіряйте, як справи у приятелів</Text>
          <Text style={styles.bulletPoint}>• Спостерігайте за ними</Text>
          <Text style={styles.bulletPoint}>• Створюйте можливості, щоб кожен почувався залученим</Text>
          <Text style={styles.bulletPoint}>• Надайте роль кожному солдату</Text>
          <Text style={styles.bulletPoint}>• Згадайте про речі, що викликають занепокоєння, під час бесід з формальним та неформальним лідером</Text>
        </View>

        {/* Direct Actions Column */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Прямі дії</Text>
          <Text style={styles.bulletPoint}>• Дізнайтесь, як йдуть справи</Text>
          <Text style={styles.bulletPoint}>• Запитуйте</Text>
          <Text style={styles.bulletPoint}>• Запросіть поїсти разом</Text>
          <Text style={styles.bulletPoint}>• Запросіть особисто на соціальний захід</Text>
          <Text style={styles.bulletPoint}>• Доручіть конкретну роль</Text>
          <Text style={styles.bulletPoint}>• Спостерігайте тривалий час (не одинокий випадок)</Text>
          <Text style={styles.bulletPoint}>• Запропонуйте допомогу</Text>
        </View>
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 16,
    backgroundColor: '#FFCC80',
    padding: 10,
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
    color: '#F57C00',
    marginBottom: 8,
    textAlign: 'center',
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
});

export default SocialIsolationActionsScreen;
