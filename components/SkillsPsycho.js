import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const data = [
  {
    category: 'Настрій',
    optimal: 'Самосвідомий, задоволений, вдячний, оптимістичний',
    ready: 'Нормальний настрій, стабільний, повага до оточення, сприймає речі спокійно',
    reaction: 'Дратівливість, нетерпимість, енергійний, сумний, перевантажений, надто чутливий',
    stress: 'Сердитий, тривожний, повний суму, безнадійний',
    unfit: 'Неконтрольований, сильна занепокоєність, панічні атаки, депресивні чи суїцидальні думки',
  },
  {
    category: 'Психічний стан',
    optimal: 'Постійно добре працює, впевнений, реалістичний',
    ready: 'Працює добре, здатний радіти, контроль над собою',
    reaction: 'Саркастичний, складно радіти, забудькуватість, неуважність',
    stress: 'Негативне ставлення, низька продуктивність, погана концентрація',
    unfit: 'Відверта непрацездатність, нездатність виконувати обов\'язки чи концентруватися',
  },
  {
    category: 'Сон',
    optimal: 'Підтримує хороші звички, чудова якість сну',
    ready: 'Нормальний режим сну, невеликі труднощі зі сном',
    reaction: 'Неспокійний сон, погані сни або кошмари',
    stress: 'Неспокійний/порушений сон, повторювані кошмари',
    unfit: 'Не може заснути чи прокидатися, спить забагато або замало',
  },
  {
    category: 'Фізичний стан',
    optimal: 'Нормальний рівень енергії та фізичної активності',
    ready: 'Добрий рівень енергії та фізичної активності',
    reaction: 'Напруженість у м\'язах, головні болі, замала фізична енергія',
    stress: 'Посилення болю, підвищена стомлюваність',
    unfit: 'Значні болі, постійна втома',
  },
  {
    category: 'Соціальні зв’язки',
    optimal: 'Побудова та підтримка міцних і глибоких соціальних зв’язків',
    ready: 'Хороші соціальні зв’язки, довіра у стосунках',
    reaction: 'Зменшення соціальних зв’язків',
    stress: 'Уникнення, відчуження',
    unfit: 'Активна відмова від соціальних зв’язків',
  },
  {
    category: 'Поведінка',
    optimal: 'Активний догляд за собою, використання навичок саморегуляції',
    ready: 'Невелике вживання алкоголю та інших засобів',
    reaction: 'Неконтрольоване вживання речовин або азартних ігор',
    stress: 'Посилене вживання шкідливих речовин',
    unfit: 'Самопошкодження, замісна поведінка, суїцидальні дії',
  }
];

const SkillsPsycho = () => {
  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.category]}>{item.category}</Text>
      <Text style={[styles.cell, styles.optimal]}>{item.optimal}</Text>
      <Text style={[styles.cell, styles.ready]}>{item.ready}</Text>
      <Text style={[styles.cell, styles.reaction]}>{item.reaction}</Text>
      <Text style={[styles.cell, styles.stress]}>{item.stress}</Text>
      <Text style={[styles.cell, styles.unfit]}>{item.unfit}</Text>
    </View>
  );

  return (
    
      <View style={styles.container}>
        <ScrollView horizontal>
          <View>
            <View style={styles.headerRow}>
              <Text style={styles.headerCell}>Категорія</Text>
              <Text style={styles.headerCell}>Оптимальна</Text>
              <Text style={styles.headerCell}>Готовність</Text>
              <Text style={styles.headerCell}>Реакція</Text>
              <Text style={styles.headerCell}>Стрес</Text>
              <Text style={styles.headerCell}>Непридатність</Text>
            </View>
            <FlatList
              data={data}
              renderItem={renderRow}
              keyExtractor={(item) => item.category}
            />
          </View>
        </ScrollView>
      </View>
    
  );
};

export default SkillsPsycho;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#cccccc',
    borderBottomWidth: 1,
    borderColor: '#000000',
  },
  headerCell: {
    width: width * 0.25, 
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#000000',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000000',
  },
  cell: {
    width: width * 0.25, 
    textAlign: 'center',
    padding: 10,
    fontSize:10
  },
  category: {
    backgroundColor: '#ff9999',
  },
  optimal: {
    backgroundColor: '#ffcc00',
  },
  ready: {
    backgroundColor: '#00cc00',
  },
  reaction: {
    backgroundColor: '#ff9900',
  },
  stress: {
    backgroundColor: '#ff6600',
  },
  unfit: {
    backgroundColor: '#cc0000',
  },
});
