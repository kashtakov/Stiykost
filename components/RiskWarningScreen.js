import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const RiskWarningScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Попередження про непотрібні ризики</Text>

      {/* Description Section */}
      <View style={styles.section}>
        <Text style={styles.bulletPoint}>
          • Можуть бути моменти, коли вам потрібно буде протидіяти непотрібним ризикам
        </Text>
        <Text style={styles.bulletPoint}>
          • Використовуйте фрази, які привертають увагу слухача, посилюючи інтенсивність
        </Text>
        <Text style={styles.bulletPoint}>
          • Цей підхід є невід'ємним для медичних установ
        </Text>
      </View>

      {/* Flow Diagram Section */}
      <View style={styles.diagram}>
        <View style={[styles.circle, { backgroundColor: '#4CAF50' }]}>
          <Text style={styles.circleText}>Я стурбований</Text>
        </View>
        <Text style={styles.arrow}>➡️</Text>
        <View style={[styles.circle, { backgroundColor: '#FFEB3B' }]}>
          <Text style={styles.circleText}>Я дуже хвилююсь</Text>
        </View>
        <Text style={styles.arrow}>➡️</Text>
        <View style={[styles.circle, { backgroundColor: '#F44336' }]}>
          <Text style={styles.circleText}>Це питання безпеки</Text>
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
  section: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#FFECB3',
    borderRadius: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  diagram: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  circleText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 24,
    color: '#333',
  },
});

export default RiskWarningScreen;
