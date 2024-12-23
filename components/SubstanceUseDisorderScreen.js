import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const SubstanceUseDisorderScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>
        Оцінка розладу внаслідок вживання психоактивних речовин (РВВПР)
      </Text>

      {/* Control Disorder Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Порушений контроль</Text>
        <Text style={styles.bulletPoint}>
          1. Використання протягом довшого періоду часу, ніж призначено, або використання більшої кількості, ніж призначено
        </Text>
        <Text style={styles.bulletPoint}>
          2. Бажання скоротити використання, але безуспішне
        </Text>
        <Text style={styles.bulletPoint}>
          3. Витрачання надмірної кількості часу на отримання/вживання/відновлення після вживання наркотичних чи лікарських речовин
        </Text>
        <Text style={styles.bulletPoint}>
          4. Потяг настільки інтенсивний, що важко думати про щось інше
        </Text>
      </View>

      {/* Social Impairment Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Порушення у соціальній сфері</Text>
        <Text style={styles.bulletPoint}>
          5. Продовження використання, незважаючи на проблеми з роботою, навчанням або сімейними/соціальними зобов'язаннями
        </Text>
        <Text style={styles.bulletPoint}>
          6. Продовження використання психоактивної речовини, незважаючи на проблеми міжособистісних взаємин, спричинених її вживанням
        </Text>
        <Text style={styles.bulletPoint}>
          7. Важливі та значущі соціальні та відпочивальні заходи можуть бути скасовані або скорочені через вживання психоактивних речовин
        </Text>
      </View>

      {/* Risky Use Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Ризиковане використання</Text>
        <Text style={styles.bulletPoint}>
          8. Нездатність утримуватися від вживання речовини, незважаючи на шкоду, яку вона завдає
        </Text>
        <Text style={styles.bulletPoint}>
          9. Неодноразове вживання речовин у фізично небезпечних ситуаціях, наприклад, під час роботи з технікою або керування автомобілем
        </Text>
        <Text style={styles.bulletPoint}>
          10. Продовження вживання речовин, навіть якщо усвідомлюється, що це викликає або погіршує фізичні та психологічні проблеми
        </Text>
      </View>

      {/* Pharmacological Indicators Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Фармакологічні показники: толерантність і відміна</Text>
        <Text style={styles.bulletPoint}>
          11. Фізичні реакції на вживання та на його припинення
        </Text>
      </View>

      {/* Severity Indicators Section */}
      <View style={styles.severitySection}>
        <View style={styles.severityBoxLight}>
          <Text style={styles.severityText}>Легкий РВВПР 2-3 критерія</Text>
        </View>
        <View style={styles.severityBoxModerate}>
          <Text style={styles.severityText}>Помірний РВВПР 4-5 критеріїв</Text>
        </View>
        <View style={styles.severityBoxSevere}>
          <Text style={styles.severityText}>Важкий РВВПР 6+ критеріїв</Text>
        </View>
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
    fontSize: 22,
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
    padding: 16,
    backgroundColor: '#EAFBF6',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1976D2',
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
    marginBottom: 8,
  },
  severitySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  severityBoxLight: {
    flex: 1,
    backgroundColor: '#FFF9C4',
    padding: 10,
    marginRight: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  severityBoxModerate: {
    flex: 1,
    backgroundColor: '#FFE082',
    padding: 10,
    marginHorizontal: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  severityBoxSevere: {
    flex: 1,
    backgroundColor: '#FFAB91',
    padding: 10,
    marginLeft: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  severityText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default SubstanceUseDisorderScreen;
