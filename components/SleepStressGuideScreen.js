import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const SleepStressGuideScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Сон у стресових умовах: скорочене керівництво</Text>

      {/* Challenge Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Виклик</Text>
        <Text style={styles.paragraph}>
          Перебування у небезпечному чи напруженому середовищі та невпевненість у тому, що принесе завтрашній день, може викликати хвилювання та тривогу, що може спричинити труднощі зі сном. Стрес може зробити складнішим засинання та продовження сну. Втрата сну через стрес - поширене явище.
        </Text>
      </View>

      {/* Strategies Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Стратегії боротьби із стресом вдень та тривожністю перед сном</Text>
        <Text style={styles.bulletPoint}>• Ведіть щоденник думок та емоцій на сьогоднішній день та на майбутнє.</Text>
        <Text style={styles.bulletPoint}>• Використовуйте список або нагадування для задач, які треба виконати наступного дня, щоб відчути контроль та звільнити голову від зайвих думок.</Text>
        <Text style={styles.bulletPoint}>• Спробуйте наступні техніки релаксації: концентрація уваги, прогресивна м’язова релаксація та самозаспокоєння.</Text>
      </View>

      {/* Sleep Improvement Tips Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Поради щодо покращення сну, коли це можливо</Text>
        <Text style={styles.bulletPoint}>
          • Оптимізуйте те, що можете контролювати у своєму середовищі для сну (наприклад, температуру приміщення або зменшіть шум). Дотримуйтесь постійного розкладу.
        </Text>
        <Text style={styles.bulletPoint}>
          • Включайте елементи зі своєї рутинної перед сном, щоб допомогти вашому тілу підготуватися до відпочинку.
        </Text>
        <Text style={styles.bulletPoint}>
          • Створюйте темне та тихе середовище. Уникайте електроніки за годину до сну.
        </Text>
        <Text style={styles.bulletPoint}>
          • Протягом дня, коли можливо, виконуйте вправи. Уникайте кофеїну перед сном, обмежте вживання алкоголю та нікотину. Збільшіть час перебування на свіжому повітрі.
        </Text>
        <Text style={styles.bulletPoint}>
          • Спіть, коли є можливість. Використовуйте тактичний сон вдень, щоб досягти рекомендованої кількості сну (7+ годин на 24 години), підтримуючи продуктивність під час тривалих операцій.
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
});

export default SleepStressGuideScreen;
