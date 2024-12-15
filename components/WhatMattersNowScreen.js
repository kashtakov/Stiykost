import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const WhatMattersNowScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>“Що Важливо Зараз”</Text>

      {/* Description Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Що?</Text>
        <Text style={styles.paragraph}>
          Зосередження уваги на критично важливих завданнях і встановлення пріоритетів їх виконання
        </Text>
      </View>

      {/* How Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Як?</Text>
        <Text style={styles.paragraph}>Запитайте себе: “Що Важливо Зараз?”</Text>
      </View>

      {/* Abbreviation Highlight */}
      <View style={styles.highlightSection}>
        <Text style={styles.abbreviation}>Щ•В•З•</Text>
        <Text style={styles.abbreviationDescription}>Що Важливо Зараз</Text>
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
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  highlightSection: {
    alignItems: 'center',
    marginTop: 16,
    padding: 20,
    backgroundColor: '#FFECB3',
    borderRadius: 8,
  },
  abbreviation: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FBC02D',
    marginBottom: 8,
  },
  abbreviationDescription: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FBC02D',
  },
});

export default WhatMattersNowScreen;
