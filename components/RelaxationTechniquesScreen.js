import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const RelaxationTechniquesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Чи знаєте ви, що методи релаксації можуть допомогти покращити ваш сон?</Text>

      {/* Focused Breathing Exercise Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Вправа на концентрацію уваги</Text>
        <Text style={styles.bulletPoint}>
          • Спробуйте цю дихальну вправу, щоб заспокоїти розум та підготуватися до сну:
        </Text>
        <Text style={styles.indentedBulletPoint}>- Зробіть вдих на видих, відчуйте, як живіт піднімається та опускається з кожним подихом.</Text>
        <Text style={styles.indentedBulletPoint}>- Тепер порахуйте кожний цикл дихання від 7 до 1...</Text>
        <Text style={styles.indentedBulletPoint}>- Видихніть... Видихніть...</Text>
        <Text style={styles.indentedBulletPoint}>- Продовжуйте рахувати свої подихи від 7 до 1.</Text>
        <Text style={styles.indentedBulletPoint}>- Якщо ви збились з лічби чи відволіклися, починайте знову з 7.</Text>
        <Text style={styles.indentedBulletPoint}>- Повторіть цю вправу 3-5 разів.</Text>
      </View>

      {/* Progressive Muscle Relaxation Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Прогресивна м'язова релаксація</Text>
        <Text style={styles.bulletPoint}>
          • Спробуйте цю техніку, яка передбачає напруження та розслаблення одного м’яза за раз, щоб зменшити тілесну напругу, контролювати психічний стрес і покращити сон:
        </Text>
        <Text style={styles.indentedBulletPoint}>- Напружте ліву ногу та стопу... потім розслабте.</Text>
        <Text style={styles.indentedBulletPoint}>- Напружте праву ногу та стопу... потім розслабте.</Text>
        <Text style={styles.indentedBulletPoint}>- Напружте обидві ноги та стопи... потім розслабте.</Text>
        <Text style={styles.indentedBulletPoint}>- Напружте ліву руку та кисть... потім розслабте.</Text>
        <Text style={styles.indentedBulletPoint}>- Напружте праву руку та кисть... потім розслабте.</Text>
        <Text style={styles.indentedBulletPoint}>- Напружте обидві руки та кисті... потім розслабте.</Text>
        <Text style={styles.indentedBulletPoint}>- Напружте м’язи обличчя... потім розслабте.</Text>
        <Text style={styles.bulletPoint}>Складений варіант: видихайте, коли напружуєтеся, та видихайте, коли розслабляєтеся.</Text>
      </View>

      {/* Guided Imagery Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Керована уява</Text>
        <Text style={styles.bulletPoint}>
          • Якщо дозволяють обставини, спробуйте цю техніку керованої уяви, щоб викликати спокій і відчуття невимушеності:
        </Text>
        <Text style={styles.indentedBulletPoint}>- Це може бути вигадане місце чи місце, де ви вже були раніше.</Text>
        <Text style={styles.indentedBulletPoint}>- Підключіть всі свої відчуття для створення розслабляючого образу.</Text>
        <Text style={styles.indentedBulletPoint}>- Уявіть, як виглядає це місце і що ви там чуєте.</Text>
        <Text style={styles.indentedBulletPoint}>- Уявіть запахи та смаки, які приносять відчуття спокою.</Text>
        <Text style={styles.bulletPoint}>
          • Ви можете повертатися до місця, яке ви створили, кожного разу, коли ви готуєтесь до сну.
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
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  indentedBulletPoint: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
    paddingLeft: 16,
  },
});

export default RelaxationTechniquesScreen;
