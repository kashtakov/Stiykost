import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const WhatMattersNowScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>“Що Важливо Зараз”</Text>

      {/* Description Section */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>Що?</Text>
        <Text style={styles.paragraph}>
          Зосередження уваги на критично важливих завданнях і встановлення пріоритетів їх виконання.
        </Text>
      </View>

      {/* How Section */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>Як?</Text>
        <Text style={styles.paragraph}>Запитайте себе: “Що Важливо Зараз?”</Text>
      </View>

      {/* Abbreviation Highlight */}
      <View style={styles.highlightCard}>
        <Text style={styles.abbreviation}>Щ•В•З</Text>
        <Text style={styles.abbreviationDescription}>Що Важливо Зараз</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerIcon}>🔍</Text>
        <Text style={styles.footerText}>Фокусуйтесь на головному</Text>
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
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#FFFDE7',
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
    color: '#333',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: '#424242',
    lineHeight: 22,
  },
  highlightCard: {
    alignItems: 'center',
    marginTop: 16,
    padding: 20,
    backgroundColor: '#FFECB3',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  abbreviation: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#F57C00',
    marginBottom: 8,
  },
  abbreviationDescription: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F57C00',
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

export default WhatMattersNowScreen;
