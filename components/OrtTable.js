import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const data = [
  {
    category: 'Турбота про себе',
    optimization: 'Дотримуйтесь здорового способу життя. Практикуйте прийняття. Культивуйте віру в здатність до розвитку.',
    maintenance: 'Знайте свої межі. Дотримуйтесь правил здоров’я у харчуванні, вправах, режимі сну.',
    resistance: 'Помічайте ознаки стресу. Звертайтесь до інших. Використовуйте AVAMind.',
    help: 'Негайно зверніться за допомогою до медичного персоналу. Очікуйте одужання.',
  },
  {
    category: 'Турбота про приятелів',
    optimization: 'Розвивайте лідерські якості. Створюйте міцну згуртованість.',
    maintenance: 'Використовуйте активне слухання. Нормалізуйте ситуацію. Спілкуйтесь ефективно.',
    resistance: 'Активно слухайте. Використовуйте ненасильницьке спілкування.',
    help: 'Практикуйте iCover. Зверніться до доступних джерел допомоги.',
  },
];

const OrtTable = () => {
  return (
    <ScrollView style={styles.container} horizontal>
      <View style={styles.table}>
        {/* Header Row */}
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerCell]}>Категорія</Text>
          <Text style={[styles.cell, styles.headerCell]}>Оптимізація</Text>
          <Text style={[styles.cell, styles.headerCell]}>Підтримування</Text>
          <Text style={[styles.cell, styles.headerCell]}>Протидія</Text>
          <Text style={[styles.cell, styles.headerCell]}>Пошук допомоги</Text>
        </View>
        {/* Data Rows */}
        {data.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={[styles.cell, styles.categoryCell]}>{item.category}</Text>
            <Text style={styles.cell}>{item.optimization}</Text>
            <Text style={styles.cell}>{item.maintenance}</Text>
            <Text style={styles.cell}>{item.resistance}</Text>
            <Text style={styles.cell}>{item.help}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  table: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#dee2e6',
  },
  headerRow: {
    backgroundColor: '#343a40',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderColor: '#dee2e6',
    textAlign: 'center',
    fontSize: 14,
  },
  headerCell: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  categoryCell: {
    backgroundColor: '#e9ecef',
    fontWeight: 'bold',
  },
});

export default OrtTable;
