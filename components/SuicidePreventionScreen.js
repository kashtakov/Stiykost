import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const SuicidePreventionScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Протидія суїциду</Text>

      {/* Risk Indicators Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Ознаки низького та високого ризику</Text>
        <View style={styles.row}>
          <View style={styles.columnLowRisk}>
            <Text style={styles.columnTitle}>Низький ризик</Text>
            <Text style={styles.bulletPoint}>• Періодичні думки про суїцид</Text>
            <Text style={styles.bulletPoint}>• Без наміру</Text>
            <Text style={styles.bulletPoint}>• Без плану</Text>
            <Text style={styles.bulletPoint}>• Без попередніх спроб</Text>
          </View>
          <View style={styles.columnHighRisk}>
            <Text style={styles.columnTitle}>Високий ризик</Text>
            <Text style={styles.bulletPoint}>• Постійні суїцидальні думки чи намір</Text>
            <Text style={styles.bulletPoint}>• Сильне бажання померти чи суїцидний план</Text>
            <Text style={styles.bulletPoint}>• Нещодавні спроби суїциду</Text>
            <Text style={styles.bulletPoint}>• Підозра мав випадок суїциду</Text>
          </View>
        </View>
      </View>

      {/* Immediate Safety Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>1. Безпосередня безпека</Text>
        <View style={styles.row}>
          <View style={styles.columnLowRisk}>
            <Text style={styles.bulletPoint}>• Активне слухання</Text>
            <Text style={styles.bulletPoint}>• Знайдіть речі, які дають надію</Text>
          </View>
          <View style={styles.columnHighRisk}>
            <Text style={styles.bulletPoint}>• Забезпечити доступ до легальних засобів</Text>
            <Text style={styles.bulletPoint}>• Постійний нагляд і підтримка</Text>
          </View>
        </View>
      </View>

      {/* Consultation Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>2. Надання консультації</Text>
        <View style={styles.row}>
          <View style={styles.columnLowRisk}>
            <Text style={styles.bulletPoint}>• Визначте можливість допомоги</Text>
            <Text style={styles.bulletPoint}>• Направляйте до психолога</Text>
          </View>
          <View style={styles.columnHighRisk}>
            <Text style={styles.bulletPoint}>• Забезпечте підтримку на довгий час</Text>
            <Text style={styles.bulletPoint}>• Негайна консультація з лікарем</Text>
          </View>
        </View>
      </View>

      {/* Long-Term Safety Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>3. Довгострокова безпека</Text>
        <View style={styles.row}>
          <View style={styles.columnLowRisk}>
            <Text style={styles.bulletPoint}>• Розробіть план безпеки</Text>
          </View>
          <View style={styles.columnHighRisk}>
            <Text style={styles.bulletPoint}>• Постійний контроль та підтримка</Text>
          </View>
        </View>
      </View>

      {/* Safety Plan Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>План безпеки</Text>
        <Text style={styles.bulletPoint}>• Ознаки погіршення</Text>
        <Text style={styles.bulletPoint}>• Стратегія подолання</Text>
        <Text style={styles.bulletPoint}>• Список речей, що можуть відволікти від джерел стресу</Text>
        <Text style={styles.bulletPoint}>• Список людей, до яких можна звернутися по допомогу</Text>
        <Text style={styles.bulletPoint}>• Список дій, які допоможуть зробити оточення безпечним</Text>
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
  section: {
    marginBottom: 16,
    padding: 15,
    backgroundColor: '#EAFBF6',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#388E3C',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnLowRisk: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    padding: 10,
    marginRight: 8,
    borderRadius: 10,
  },
  columnHighRisk: {
    flex: 1,
    backgroundColor: '#FFEBEE',
    padding: 10,
    marginLeft: 8,
    borderRadius: 10,
  },
  columnTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#000',
  },
  bulletPoint: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
    marginBottom: 6,
  },
});

export default SuicidePreventionScreen;
