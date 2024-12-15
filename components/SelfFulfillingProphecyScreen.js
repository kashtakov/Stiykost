import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const SelfFulfillingProphecyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Самовтілюване пророцтво</Text>

      {/* Cycle Diagram */}
      <View style={styles.cycleContainer}>
        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Переконання</Text>
          <Text style={styles.stepText}>“Вони все ще працюють над тим, щоб стати єдиною командою.”</Text>
        </View>

        <Text style={styles.arrow}>➡️</Text>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Очікування</Text>
          <Text style={styles.stepText}>“Якщо я познайомлюся з ним, а потім почну жартувати, з ним буде набагато веселіше бути поруч.”</Text>
        </View>

        <Text style={styles.arrow}>➡️</Text>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Поведінка</Text>
          <Text style={styles.stepText}>Розмовляє з членами підрозділу, розпочинає групову активність, поводить себе позитивно.</Text>
        </View>

        <Text style={styles.arrow}>➡️</Text>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Результат</Text>
          <Text style={styles.stepText}>Відчуває більший зв’язок з підрозділом; формуються нові норми для наступних осіб, які приєднаються до підрозділу.</Text>
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
  cycleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepContainer: {
    width: '80%',
    backgroundColor: '#FFE0B2',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
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
  },
  arrow: {
    fontSize: 24,
    color: '#333',
    marginVertical: 4,
  },
});

export default SelfFulfillingProphecyScreen;
