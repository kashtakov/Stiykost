import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const SubstanceUseDisorderScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Оцінка розладу внаслідок вживання психоактивних речовин (РВВПР)</Text>

      {/* Control Disorder Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Порушений контроль</Text>
        <Text style={styles.bulletPoint}>1. Використання протягом довшого періоду часу, ніж призначено, або використання більшої кількості, ніж призначено</Text>
        <Text style={styles.bulletPoint}>2. Бажання скоротити використання, але безуспішне</Text>
        <Text style={styles.bulletPoint}>3. Витрачання надмірної кількості часу на отримання/вживання/відновлення після вживання наркотичних чи лікарських речовин</Text>
        <Text style={styles.bulletPoint}>4. Потяг настільки інтенсивний, що важко думати про щось інше</Text>
      </View>

      {/* Social Impairment Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Порушення у соціальній сфері</Text>
        <Text style={styles.bulletPoint}>5. Продовження використання, незважаючи на проблеми з роботою, навчанням або сімейними/соціальними зобов'язаннями</Text>
        <Text style={styles.bulletPoint}>6. Продовження використання психоактивної речовини, незважаючи на проблеми міжособистісних взаємин, спричинених її вживанням</Text>
        <Text style={styles.bulletPoint}>7. Важливі та значущі соціальні та відпочивальні заходи можуть бути скасовані або скорочені через вживання психоактивних речовин</Text>
      </View>

      {/* Risky Use Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Ризиковане використання</Text>
        <Text style={styles.bulletPoint}>8. Нездатність утримуватися від вживання речовини, незважаючи на шкоду, яку вона завдає</Text>
        <Text style={styles.bulletPoint}>9. Неодноразове вживання речовин у фізично небезпечних ситуаціях, наприклад, під час роботи з технікою або керування автомобілем</Text>
        <Text style={styles.bulletPoint}>10. Продовження вживання речовин, навіть якщо усвідомлюється, що це викликає або погіршує фізичні та психологічні проблеми</Text>
      </View>

      {/* Pharmacological Indicators Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Фармакологічні показники: толерантність і відміна</Text>
        <Text style={styles.bulletPoint}>11. Фізичні реакції на вживання та на його припинення</Text>
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

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Алкоголь і наркотики</Text>
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
    backgroundColor: '#F8BBD0',
    padding: 8,
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
  severitySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  severityBoxLight: {
    flex: 1,
    backgroundColor: '#FFF9C4',
    padding: 8,
    marginRight: 4,
    borderRadius: 8,
    alignItems: 'center',
  },
  severityBoxModerate: {
    flex: 1,
    backgroundColor: '#FFE082',
    padding: 8,
    marginHorizontal: 4,
    borderRadius: 8,
    alignItems: 'center',
  },
  severityBoxSevere: {
    flex: 1,
    backgroundColor: '#FFAB91',
    padding: 8,
    marginLeft: 4,
    borderRadius: 8,
    alignItems: 'center',
  },
  severityText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#F06292',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default SubstanceUseDisorderScreen;
