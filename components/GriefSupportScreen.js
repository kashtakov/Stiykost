import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const GriefSupportScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Як розмовляти з людиною у скорботі</Text>

      {/* Guidelines Section */}
      <View style={styles.section}>
        <Text style={styles.bulletPoint}>
          <Text style={styles.bold}>Надайте факти:</Text> Якщо ви можете, надайте факти про обставини втрати
        </Text>
        <Text style={styles.bulletPoint}>
          <Text style={styles.bold}>Активне слухання:</Text> Сконцентруйтесь на ситуації та вислухайте скорботну людину
        </Text>
        <Text style={styles.bulletPoint}>
          <Text style={styles.bold}>Нормалізація:</Text> Не применьшуючи втрати, скажіть скорботній людині, що її реакція нормальна та зрозуміла
        </Text>
        <Text style={styles.bulletPoint}>
          <Text style={styles.bold}>Використовуйте ім’я:</Text> Не бійтеся називати покійного на ім’я
        </Text>
        <Text style={styles.bulletPoint}>
          <Text style={styles.bold}>Витримка:</Text> Будьте відкритими, щоб вислухати емоційний біль скорботної людини, вам не потрібно «виправляти» її
        </Text>
        <Text style={styles.bulletPoint}>
          <Text style={styles.bold}>Зберігайте власні психологічні межі:</Text> Чиясь втрата не обов'язково є вашою втратою; ви можете надавати допомогу, не поглинаючи це горе
        </Text>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Горе</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 16,
    backgroundColor: '#E1BEE7',
    padding: 8,
  },
  section: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#424242',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default GriefSupportScreen;
