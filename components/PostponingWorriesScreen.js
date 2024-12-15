import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const PostponingWorriesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>“Відкладання переживань”</Text>

      {/* Steps Section */}
      <View style={styles.section}>
        <Text style={styles.bulletPoint}>• Виділіть 10 хвилин на день, щоб потурбуватися (але не перед сном!)</Text>
        <Text style={styles.bulletPoint}>• Якщо у вас немає турбот, пропустіть цей час для хвилювань</Text>
        <Text style={styles.bulletPoint}>• Під час занепокоєння повністю зосередьтеся на вашому переживанні</Text>
        <Text style={styles.bulletPoint}>
          • Решту дня, коли вам хочеться хвилюватися, нагадайте собі: “Зараз не час. Це заплановано на потім!”
        </Text>
      </View>

      {/* Footer Icon */}
      <View style={styles.footer}>
        <Text style={styles.footerIcon}>💭</Text>
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
    fontSize: 20,
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
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
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

export default PostponingWorriesScreen;
