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
        <Text style={styles.bulletPoint}>• Вести щоденник думок та емоцій на сьогоднішній день та на майбутнє.</Text>
        <Text style={styles.bulletPoint}>• Використовуйте список або нагадування для задач, які треба виконати наступного дня, щоб мати певний рівень контролю та виключити зайве з голови.</Text>
        <Text style={styles.bulletPoint}>• Спробуйте наступні техніки релаксації: сконцентрована увага, прогресивна м’язова релаксація та самозаспокоєння.</Text>
      </View>

      {/* Sleep Improvement Tips Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Поради щодо покращення сну, коли це можливо</Text>
        <Text style={styles.bulletPoint}>
          • Покращуйте те, що можете контролювати у своєму середовищі для сну (наприклад, температуру приміщення або зменшуйте шум) і слідкуйте за своїм розкладом.
        </Text>
        <Text style={styles.bulletPoint}>
          • Включайте елементи зі своєї рутинної перед сном, щоб допомогти вашому тілу підготуватися до сну.
        </Text>
        <Text style={styles.bulletPoint}>
          • Створюйте темне та тихе середовище і уникайте електроніки за годину до сну.
        </Text>
        <Text style={styles.bulletPoint}>
          • Протягом дня, якщо ви можете, регулярно виконуйте вправи, відмовтесь від кофеїну перед сном, зменшіть вживання алкоголю та нікотину, збільшіть час перебування на свіжому повітрі вдень.
        </Text>
        <Text style={styles.bulletPoint}>
          • Спіть, коли можете. Використовуйте тактичний сон вдень для досягнення рекомендованої кількості сну (7+ годин на 24 години), щоб підтримувати продуктивність під час тривалих операцій.
        </Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1976D2',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
});

export default SleepStressGuideScreen;
