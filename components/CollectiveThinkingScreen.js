import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const CollectiveThinkingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Колективне мислення</Text>

      {/* Group Members Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Члени групи</Text>
        <Text style={styles.bulletPoint}>• Грайте по черзі в “адвоката диявола”</Text>
        <Text style={styles.subBullet}>– Мислити критично</Text>
        <Text style={styles.subBullet}>– Знаходьте прогалини у плані</Text>
        <Text style={styles.subBullet}>– Пропонуйте протилежні точки зору</Text>
        <Text style={styles.bulletPoint}>• Нехай кожен скаже щось критичне</Text>
        <Text style={styles.bulletPoint}>
          • Обговоріть тему з кимось поза групою, кому довіряєте, щоб отримати неупереджену точку зору
        </Text>
      </View>

      {/* Leaders Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Лідери (формальні та неформальні)</Text>
        <Text style={styles.bulletPoint}>• Вискажіть свої побажання в останню чергу</Text>
        <Text style={styles.bulletPoint}>• Надавайте людям роль скептика — робіть їх відповідальними</Text>
        <Text style={styles.bulletPoint}>
          • Створіть невеликі групи для одночасної роботи над конкретним завданням, щоб отримати різні точки зору
        </Text>
      </View>

      {/* Footer Icon */}
      <View style={styles.footer}>
        <Text style={styles.footerIcon}>👥</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF8E1',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 16,
    backgroundColor: '#FFEB3B',
    padding: 10,
  },
  section: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#FFFDE7',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  subBullet: {
    fontSize: 16,
    color: '#333',
    marginLeft: 20,
    marginBottom: 4,
  },
  footer: {
    alignItems: 'center',
    marginTop: 16,
  },
  footerIcon: {
    fontSize: 32,
    color: '#FBC02D',
  },
});

export default CollectiveThinkingScreen;
