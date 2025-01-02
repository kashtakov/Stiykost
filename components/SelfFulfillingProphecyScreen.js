import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const SelfFulfillingProphecyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <View style={styles.card}>
        <Text style={styles.title}>Самовтілюване пророцтво</Text>
      </View>

      {/* Cycle Diagram */}
      <View style={styles.card}>
        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Переконання</Text>
          <Text style={styles.stepText}>
            “Вони все ще працюють над тим, щоб стати єдиною командою.”
          </Text>
        </View>

        <Text style={styles.arrow}>⬇️</Text>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Очікування</Text>
          <Text style={styles.stepText}>
            “Якщо я познайомлюся з ним, а потім почну жартувати, з ним буде набагато веселіше бути поруч.”
          </Text>
        </View>

        <Text style={styles.arrow}>⬇️</Text>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Поведінка</Text>
          <Text style={styles.stepText}>
            Розмовляє з членами підрозділу, розпочинає групову активність, поводить себе позитивно.
          </Text>
        </View>

        <Text style={styles.arrow}>⬇️</Text>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Результат</Text>
          <Text style={styles.stepText}>
            Відчуває більший зв’язок з підрозділом; формуються нові норми для наступних осіб, які приєднаються до підрозділу.
          </Text>
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
  stepContainer: {
    backgroundColor: '#FFE0B2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F57C00',
    marginBottom: 4,
  },
  stepText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 22,
  },
  arrow: {
    fontSize: 24,
    color: '#F57C00',
    textAlign: 'center',
    marginVertical: 8,
  },
});

export default SelfFulfillingProphecyScreen;
