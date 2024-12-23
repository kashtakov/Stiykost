import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const SleepGuideScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <Text style={styles.title}>Сон: посібник для солдатів</Text>

      {/* Sleep Importance Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Втрата сну = втрата продуктивності</Text>
        <Text style={styles.paragraph}>
          Сон має вирішальне значення для підтримки розумових здібностей, необхідних для успіху. Навіть такі прості завдання, як спілкування, керування автомобілем або побудова системи координат, можуть бути порушені недостатнім сном (менше 7-8 годин кожні 24 години).
        </Text>
        <Text style={styles.paragraph}>
          Наприклад, солдат може втратити прицільність, а мішень може виявитися хибною. Польові операції та операції з енерговитратами можуть створювати ситуації, коли недостатній сон стає нормою.
        </Text>
      </View>

      {/* Best Sleep Habits Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Найкращі звички для сну</Text>
        <Text style={styles.bulletPoint}>• Сон 7-8 годин кожні 24 години</Text>
        <Text style={styles.bulletPoint}>• Відмовитися від кофеїну за 6 годин до сну</Text>
        <Text style={styles.bulletPoint}>• Закінчити їсти за 3 години до сну</Text>
        <Text style={styles.bulletPoint}>• Встановити рутину розслаблення за 30-60 хвилин до сну:</Text>
        <Text style={styles.indentedBulletPoint}>- Читайте та слухайте розслаблюючу музику</Text>
        <Text style={styles.indentedBulletPoint}>- Уникайте електроніки за 1 годину до сну</Text>
        <Text style={styles.indentedBulletPoint}>- Використовуйте ванну кімнату</Text>
        <Text style={styles.bulletPoint}>
          • Підготуйте темне, прохолодне та тихе місце для сну. Використовуйте затички для вух або вентилятор, щоб блокувати звуки, та прикривайте очі, щоб блокувати світло.
        </Text>
        <Text style={styles.bulletPoint}>• Прокидайтеся щодня в один і той же час</Text>
        <Text style={styles.bulletPoint}>
          • Якщо ви прокидаєтеся від змін у протягом 2 тижнів і продовжуєте мати проблеми зі сном, зверніться до свого військового лікаря.
        </Text>
      </View>

      {/* Lack of Sleep Effects Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Недостатній сон погіршує ці (та інші) здібності:</Text>
        <Text style={styles.bulletPoint}>• Виявлення та адекватне визначення рівнів загрози</Text>
        <Text style={styles.bulletPoint}>• Запит вогню в закритих позицій</Text>
        <Text style={styles.bulletPoint}>• Координація тактики підрозділу</Text>
        <Text style={styles.bulletPoint}>• Інтеграція артилерійських карток вогню</Text>
      </View>

      {/* Signs of Sleep Deprivation Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Ознаки недостатнього сну</Text>
        <Text style={styles.bulletPoint}>• Борьба зі сном під час перерви, на варті або за кермом</Text>
        <Text style={styles.bulletPoint}>• Труднощі з розумінням або відстеженням інформації</Text>
        <Text style={styles.bulletPoint}>• Втрата уваги</Text>
        <Text style={styles.bulletPoint}>• Зменшення ініціативи/мотивації</Text>
      </View>

      {/* Recovery from Sleep Deprivation Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Подолання відновлення від сну</Text>
        <Text style={styles.bulletPoint}>
          • Використовуйте денний сон, щоб отримати 7-8 годин сну на 24 години
        </Text>
        <Text style={styles.bulletPoint}>
          • Використовуйте ліки для сну лише у випадку, коли лікар вирішив, що це необхідно
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
    color: '#1976D2',
    marginBottom: 20,
    textShadowColor: '#CDEBE8',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  section: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#EAFBF6',
    borderRadius: 10,
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
  paragraph: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 12,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 8,
  },
  indentedBulletPoint: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 8,
    paddingLeft: 16,
  },
});

export default SleepGuideScreen;
