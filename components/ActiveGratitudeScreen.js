import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ActiveGratitudeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Активна вдячність</Text>

      {/* Content Section */}
      <View style={styles.row}>
        {/* What Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Що?</Text>
          <Text style={styles.bulletPoint}>• Зосередьте свою увагу на хороших речах, що відбуваються</Text>
          <Text style={styles.bulletPoint}>• Знаходьте маленькі моменти у повсякденному житті</Text>
        </View>

        {/* When Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Коли?</Text>
          <Text style={styles.bulletPoint}>• Щоденно, та постійно</Text>
          <Text style={styles.bulletPoint}>• Коли у вас є час на роздуми</Text>
          <Text style={styles.bulletPoint}>• У розмові з іншими</Text>
        </View>
      </View>

      {/* How Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Як?</Text>
        <Text style={styles.paragraph}>Крок 1: Визначте, що з того, що сталося, ви цінуєте</Text>
        <Text style={styles.paragraph}>Крок 2: Помітьте 3 гарні речі, які сталися</Text>
        <Text style={styles.paragraph}>Крок 3: Витратьте хвилину на роздуми над кожним з них</Text>
        <Text style={styles.bulletPoint}>• Запитайте себе, що це означає для вас</Text>
        <Text style={styles.bulletPoint}>• Визначте, як ви можете отримати більше від цього досвіду</Text>
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
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFECB3',
    padding: 12,
    marginHorizontal: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FBC02D',
    marginBottom: 8,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    lineHeight: 22,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
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

export default ActiveGratitudeScreen;
