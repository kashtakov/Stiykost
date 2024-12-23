import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const PsychosisInfoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Психоз</Text>
      <Text style={styles.subtitle}>Ознаки та симптоми</Text>

      {/* Symptoms List */}
      <View style={styles.section}>
        <Text style={styles.bulletPoint}>
          • Маячення (нереалістичні, химерні переконання)
        </Text>
        <Text style={styles.bulletPoint}>
          • Галюцинації (сенсорні відчуття, не пов'язані з реальністю)
        </Text>
        <Text style={styles.bulletPoint}>
          • Неорганізоване мислення (сплутані або незрозумілі думки)
        </Text>
        <Text style={styles.bulletPoint}>
          • Дезорганізована поведінка (перезбуджена, нев'язна, неадекватна,
          безглузда поведінка)
        </Text>
        <Text style={styles.bulletPoint}>
          • Пасивність та відсутність реакцій (приглушене емоційне вираження,
          мінімальна мова)
        </Text>
        <Text style={styles.bulletPoint}>• Параноя (підозрілість)</Text>
      </View>

      {/* Interventions Section */}
      <Text style={styles.subtitle}>Втручання</Text>

      {/* Step 1 */}
      <View style={styles.step}>
        <Text style={styles.stepTitle}>
          1. Організуйте безпечне середовище та спостерігайте
        </Text>
        <Text style={styles.stepText}>
          Відведіть солдата в тихе, безпечне місце. Спостерігайте, щоб
          переконатися, що він/вона не завдає шкоди собі чи іншим. НЕ
          намагайтесь переконувати солдата, що його/її маячні переконання чи
          галюцинації не реальні.
        </Text>
      </View>

      {/* Step 2 */}
      <View style={styles.step}>
        <Text style={styles.stepTitle}>2. Визначте причину психозу</Text>
        <Text style={styles.stepText}>
          Виясніть наявність вживання наркотиків або травм голови, які можуть
          бути причиною психозу. Визначення і стабілізація причини сприятиме
          його/її одужанню.
        </Text>
      </View>

      {/* Step 3 */}
      <View style={styles.step}>
        <Text style={styles.stepTitle}>3. Евакуюйте солдата</Text>
        <Text style={styles.stepText}>
          Використовуйте евакуаційні засоби для подальшого медичного обстеження.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7FDF9',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2A9D8F',
    marginBottom: 16,
    textShadowColor: '#CDEBE8',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 12,
    color: '#2A6E65',
    textAlign: 'center',
  },
  section: {
    marginVertical: 8,
    paddingHorizontal: 10,
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
    lineHeight: 22,
  },
  step: {
    marginVertical: 12,
    padding: 15,
    backgroundColor: '#EAFBF6',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796B',
    marginBottom: 8,
  },
  stepText: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
});

export default PsychosisInfoScreen;
