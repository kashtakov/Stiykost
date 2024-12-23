import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const GroundingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>“Заземлення”</Text>

      {/* Description Section */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>Що?</Text>
        <Text style={styles.paragraph}>Повернення уваги до теперішнього моменту</Text>
      </View>

      {/* How Section */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>Як?</Text>
        <Text style={styles.paragraph}>Визначте 3 речі, які ви:</Text>
      </View>

      {/* Grounding Details */}
      <View style={styles.row}>
        {/* Sight Column */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Бачите</Text>
          <Text style={styles.bulletPoint}>• Побратим</Text>
          <Text style={styles.bulletPoint}>• Зброя</Text>
          <Text style={styles.bulletPoint}>• Шолом</Text>
          <Text style={styles.icon}>👁️</Text>
        </View>

        {/* Hearing Column */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Чуєте</Text>
          <Text style={styles.bulletPoint}>• Хтось розмовляє</Text>
          <Text style={styles.bulletPoint}>• Працює двигун</Text>
          <Text style={styles.bulletPoint}>• Артилерійська стрілянина</Text>
          <Text style={styles.icon}>👂</Text>
        </View>

        {/* Feeling Column */}
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
    padding: 8,
    backgroundColor: '#FFFDE7',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: '#424242',
    lineHeight: 22,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  column: {
    flex: 1,
    padding: 10,
    marginHorizontal: 4,
    backgroundColor: '#FFECB3',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
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
    color: '#424242',
    marginBottom: 4,
    textAlign: 'center',
  },
  icon: {
    fontSize: 32,
    marginTop: 10,
    color: '#F57C00',
  },
});

export default GroundingScreen;
