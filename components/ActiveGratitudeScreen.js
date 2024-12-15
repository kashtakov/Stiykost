import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ActiveGratitudeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Активна вдячність</Text>

      {/* Three Columns Section */}
      <View style={styles.row}>
        {/* What Section */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Що?</Text>
          <Text style={styles.bulletPoint}>• Зосередьте свою увагу на хороших речах, що відбуваються</Text>
          <Text style={styles.bulletPoint}>• Знаходьте маленькі моменти у повсякденному житті</Text>
        </View>

        {/* When Section */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Коли?</Text>
          <Text style={styles.bulletPoint}>• Щоденно, та постійно</Text>
          <Text style={styles.bulletPoint}>• Коли у вас є час на роздуми</Text>
          <Text style={styles.bulletPoint}>• У розмові з іншими</Text>
        </View>

        {/* How Section */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Як?</Text>
          <Text style={styles.paragraph}>Крок 1: Визначте, що з того, що сталося, ви цінуєте</Text>
          <Text style={styles.paragraph}>Крок 2: Помітьте 3 гарні речі, які сталися</Text>
          <Text style={styles.paragraph}>Крок 3: Витратьте хвилину на роздуми над кожним з них</Text>
          <Text style={styles.bulletPoint}>• Запитайте себе, що це означає для вас</Text>
          <Text style={styles.bulletPoint}>• Визначте, як ви можете отримати більше від цього досвіду</Text>
        </View>
      </View>

      {/* Footer Icon */}
      <View style={styles.footer}>
        <Text style={styles.footerIcon}>☕</Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    backgroundColor: '#FFECB3',
    padding: 10,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  columnTitle: {
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
