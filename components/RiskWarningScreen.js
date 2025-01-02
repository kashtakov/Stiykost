import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const RiskWarningScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <View style={styles.card}>
        <Text style={styles.title}>Попередження про непотрібні ризики</Text>
      </View>

      {/* Description Section */}
      <View style={styles.card}>
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
      <View style={styles.card}>
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7FDF9', // Light and soothing background
  },
  card: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#FFECB3', // Soft yellow for cards
    borderRadius: 12,
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
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    lineHeight: 22,
  },
  diagram: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  circleText: {
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 10,
    color: '#333',
  },
});

export default RiskWarningScreen;
