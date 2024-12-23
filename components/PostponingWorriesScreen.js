import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const PostponingWorriesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>“Відкладання переживань”</Text>

      {/* Card Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Як використовувати метод</Text>
        <View style={styles.cardContent}>
          <Text style={styles.bulletPoint}>• Виділіть 10 хвилин на день, щоб потурбуватися (але не перед сном!)</Text>
          <Text style={styles.bulletPoint}>• Якщо у вас немає турбот, пропустіть цей час для хвилювань</Text>
          <Text style={styles.bulletPoint}>• Під час занепокоєння повністю зосередьтеся на вашому переживанні</Text>
          <Text style={styles.bulletPoint}>
            • Решту дня, коли вам хочеться хвилюватися, нагадайте собі: “Зараз не час. Це заплановано на потім!”
          </Text>
        </View>
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
    color: '#2E7D32',
    marginBottom: 16,
    backgroundColor: '#C8E6C9',
    padding: 12,
    borderRadius: 8,
  },
  card: {
    backgroundColor: '#FFFDE7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#F57C00',
    marginBottom: 12,
    textAlign: 'center',
  },
  cardContent: {
    marginTop: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#424242',
    marginBottom: 10,
    lineHeight: 24,
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
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#424242',
    marginTop: 8,
  },
});

export default PostponingWorriesScreen;
