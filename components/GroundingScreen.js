import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const GroundingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>“Заземлення”</Text>

      {/* Description Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Що?</Text>
        <Text style={styles.paragraph}>Повернення уваги до теперішнього моменту</Text>
      </View>

      {/* How Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Як?</Text>
        <Text style={styles.paragraph}>Визначте 3 речі, які ви:</Text>
      </View>

      {/* Table Section */}
      <View style={styles.table}>
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Бачите</Text>
          <Text style={styles.bulletPoint}>• Побратим</Text>
          <Text style={styles.bulletPoint}>• Зброя</Text>
          <Text style={styles.bulletPoint}>• Шолом</Text>
          <Text style={styles.icon}>👁️</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Чуєте</Text>
          <Text style={styles.bulletPoint}>• Хтось розмовляє</Text>
          <Text style={styles.bulletPoint}>• Працює двигун</Text>
          <Text style={styles.bulletPoint}>• Артилерійська стрілянина</Text>
          <Text style={styles.icon}>👂</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Відчуваєте</Text>
          <Text style={styles.bulletPoint}>• Зброя в моїх руках</Text>
          <Text style={styles.bulletPoint}>• Одяг на тілі</Text>
          <Text style={styles.bulletPoint}>• Ноги в чоботях</Text>
          <Text style={styles.icon}>🤲</Text>
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
    backgroundColor: '#FFEB3B',
    padding: 10,
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
    color: '#333',
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  table: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFECB3',
    borderRadius: 8,
    padding: 10,
  },
  column: {
    flex: 1,
    padding: 10,
    marginHorizontal: 4,
    backgroundColor: '#FFFDE7',
    borderRadius: 8,
    alignItems: 'center',
  },
  columnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FBC02D',
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  icon: {
    fontSize: 32,
    marginTop: 10,
    color: '#FBC02D',
  },
});

export default GroundingScreen;
