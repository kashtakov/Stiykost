import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const columnWidth = width * 0.2; // Dynamically adjust column width

const data = [
  {
    category: 'Турбота про себе:',
    optimal: 'Дотримуйтесь здорового способу життя. Практикуйте прийняття. Культивуйте віру в здатність до розвитку.',
    support: 'Знайте свої межі. Дотримуйтесь правил здоров’я у харчуванні, вправах, режимі сну.',
    resist: 'Помічайте ознаки стресу. Звертайтесь до інших. Використовуйте AVAMind.',
    help: 'Негайно зверніться за допомогою до медичного персоналу. Очікуйте одужання.',
  },
  {
    category: 'Турбота про приятелів:',
    optimal:  'Розвивайте лідерські якості. Створюйте міцну згуртованість.',
    support:'Використовуйте активне слухання. Нормалізуйте ситуацію. Спілкуйтесь ефективно.',
    resist:  'Активно слухайте. Використовуйте ненасильницьке спілкування.',
    help:'Практикуйте iCover. Зверніться до доступних джерел допомоги.',
  },
];

function SkillsORT() {
  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.category]}>{item.category}</Text>
      <Text style={[styles.cell, styles.optimal]}>{item.optimal}</Text>
      <Text style={[styles.cell, styles.support]}>{item.support}</Text>
      <Text style={[styles.cell, styles.resist]}>{item.resist}</Text>
      <Text style={[styles.cell, styles.help]}>{item.help}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal>
        <View>
          {/* Sticky Header Row */}
          <View style={styles.stickyHeader}>
            <View style={styles.headerRow}>
              <Text style={styles.headerCell}>Категорія</Text>
              <Text style={styles.headerCell}>Оптимізація</Text>
              <Text style={styles.headerCell}>Підтримування</Text>
              <Text style={styles.headerCell}>Протидія</Text>
              <Text style={styles.headerCell}>Пошук допомоги</Text>
            </View>
          </View>
          {/* Data Rows */}
          <FlatList
            data={data}
            renderItem={renderRow}
            keyExtractor={(item) => item.category}
            contentContainerStyle={{ paddingTop: 50 }} // Space for sticky header
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
}

export default SkillsORT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stickyHeader: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
    width: width * 1.5, // Adjust for table width
    backgroundColor: '#e0e0e0', // Header background
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  headerCell: {
    width: columnWidth,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#000',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  cell: {
    width: columnWidth,
    textAlign: 'center',
    padding: 10,
    fontSize: 12,
  },
  category: {
    backgroundColor: '#ff9999',
    fontWeight: 'bold',
  },
  optimal: {
    backgroundColor: '#ffcc00',
  },
  support: {
    backgroundColor: '#00cc00',
  },
  resist: {
    backgroundColor: '#ff9900',
  },
  help: {
    backgroundColor: '#ff6600',
  },
});
