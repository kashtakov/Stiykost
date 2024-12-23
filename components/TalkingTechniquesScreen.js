import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const TalkingTechniquesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Розмова з собою vs Розмова з товаришем</Text>

      {/* Two Columns Section */}
      <View style={styles.row}>
        {/* Talking to Yourself */}
        <View style={[styles.column, styles.columnLeft]}>
          <Text style={styles.columnTitle}>Розмова з собою</Text>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Що?</Text>
            <Text style={styles.paragraph}>Тренування себе</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Як?</Text>
            <Text style={styles.bulletPoint}>• Використовуйте мотивуючі слова або фрази, які підвищать впевненість у собі</Text>
            <Text style={styles.bulletPoint}>• Обговоріть з собою процедуру виконання завдання</Text>
          </View>
        </View>

        {/* Talking to a Teammate */}
        <View style={[styles.column, styles.columnRight]}>
          <Text style={styles.columnTitle}>Розмова з товаришем</Text>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Що?</Text>
            <Text style={styles.paragraph}>Тренування свого побратима</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>
            
              Як?</Text>
            <Text style={styles.bulletPoint}>• Мотиваційно: "у тебе все вийде"</Text>
            <Text style={styles.bulletPoint}>
              • Інструкційно: "масивна кровотеча, дихальні шляхи, дихання, кровообіг, черепно-мозкова травма/гіпотермія"
            </Text>
          </View>
        </View>
      </View>

     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#FFF8E1',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2E7D32',
    marginBottom: 16,
    backgroundColor: '#C8E6C9',
    padding: 8,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    padding: 12,
    marginHorizontal: 4,
    backgroundColor: '#FFECB3',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  columnLeft: {
    marginRight: 8,
  },
  columnRight: {
    marginLeft: 8,
  },
  columnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FBC02D',
    textAlign: 'center',
    marginBottom: 12,
  },
  section: {
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#424242',
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 16,
    color: '#424242',
    marginBottom: 8,
    lineHeight: 22,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#424242',
    marginBottom: 6,
    lineHeight: 22,
  },
  footer: {
    alignItems: 'center',
    marginTop: 16,
    padding: 12,
    backgroundColor: '#C8E6C9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  footerIcon: {
    fontSize: 32,
    color: '#2E7D32',
  },
});

export default TalkingTechniquesScreen;
