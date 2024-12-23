import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RelaxationTechniquesScreen = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>
        Чи знаєте ви, що методи релаксації можуть допомогти покращити ваш сон?
      </Text>

      {/* Focused Breathing Exercise Section */}
      <View style={styles.section}>
        <TouchableOpacity onPress={() => toggleSection('focusedBreathing')}>
          <View style={styles.sectionHeader}>
            <Text style={styles.subtitle}>Вправа на концентрацію   уваги</Text>
            <Ionicons
              name={expandedSections.focusedBreathing ? 'chevron-up' : 'chevron-down'}
              size={24}
              color="#388E3C"
            />
          </View>
        </TouchableOpacity>
        {expandedSections.focusedBreathing && (
          <View style={styles.content}>
            <Text style={styles.paragraph}>
              Спробуйте цю дихальну вправу, щоб заспокоїти розум та підготуватися до сну:
            </Text>
            <Text style={styles.bulletPoint}>
              - Зробіть вдих, відчуйте, як живіт піднімається та опускається з кожним подихом.
            </Text>
            <Text style={styles.bulletPoint}>
              - Порахуйте кожний цикл дихання від 7 до 1...
            </Text>
            <Text style={styles.bulletPoint}>- Видихніть... Видихніть...</Text>
            <Text style={styles.bulletPoint}>
              - Продовжуйте рахувати свої подихи від 7 до 1.
            </Text>
            <Text style={styles.bulletPoint}>
              - Якщо ви збились з лічби чи відволіклися, починайте знову з 7.
            </Text>
            <Text style={styles.bulletPoint}>- Повторіть цю вправу 3-5 разів.</Text>
          </View>
        )}
      </View>

      {/* Progressive Muscle Relaxation Section */}
      <View style={styles.section}>
        <TouchableOpacity onPress={() => toggleSection('muscleRelaxation')}>
          <View style={styles.sectionHeader}>
            <Text style={styles.subtitle}>Прогресивна м'язова релаксація</Text>
            <Ionicons
              name={expandedSections.muscleRelaxation ? 'chevron-up' : 'chevron-down'}
              size={24}
              color="#388E3C"
            />
          </View>
        </TouchableOpacity>
        {expandedSections.muscleRelaxation && (
          <View style={styles.content}>
            <Text style={styles.paragraph}>
              Використовуйте цю техніку напруження та розслаблення м’язів для зменшення напруги:
            </Text>
            <Text style={styles.bulletPoint}>
              - Напружте ліву ногу та стопу... потім розслабте.
            </Text>
            <Text style={styles.bulletPoint}>
              - Напружте праву ногу та стопу... потім розслабте.
            </Text>
            <Text style={styles.bulletPoint}>
              - Напружте обидві ноги та стопи... потім розслабте.
            </Text>
            <Text style={styles.bulletPoint}>
              - Напружте ліву руку та кисть... потім розслабте.
            </Text>
            <Text style={styles.bulletPoint}>
              - Напружте праву руку та кисть... потім розслабте.
            </Text>
            <Text style={styles.bulletPoint}>
              - Напружте м’язи обличчя... потім розслабте.
            </Text>
            <Text style={styles.paragraph}>
              Складний варіант: вдихайте, коли напружуєтеся, і видихайте, коли розслабляєтеся.
            </Text>
          </View>
        )}
      </View>

      {/* Guided Imagery Section */}
      <View style={styles.section}>
        <TouchableOpacity onPress={() => toggleSection('guidedImagery')}>
          <View style={styles.sectionHeader}>
            <Text style={styles.subtitle}>Керована уява</Text>
            <Ionicons
              name={expandedSections.guidedImagery ? 'chevron-up' : 'chevron-down'}
              size={24}
              color="#388E3C"
            />
          </View>
        </TouchableOpacity>
        {expandedSections.guidedImagery && (
          <View style={styles.content}>
            <Text style={styles.paragraph}>
              Використовуйте цю техніку для виклику спокою та відчуття безтурботності:
            </Text>
            <Text style={styles.bulletPoint}>
              - Уявіть вигадане місце чи місце, де ви вже були раніше.
            </Text>
            <Text style={styles.bulletPoint}>
              - Використовуйте всі свої відчуття для створення розслабляючого образу.
            </Text>
            <Text style={styles.bulletPoint}>
              - Уявіть, як виглядає це місце і що ви там чуєте.
            </Text>
            <Text style={styles.bulletPoint}>
              - Уявіть запахи та смаки, які приносять спокій.
            </Text>
            <Text style={styles.paragraph}>
              Ви можете повертатися до цього місця щоразу, коли ви готуєтесь до сну.
            </Text>
          </View>
        )}
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#388E3C',
  },
  content: {
    marginTop: 12,
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
    paddingLeft: 16,
  },
});

export default RelaxationTechniquesScreen;
