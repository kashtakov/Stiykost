import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const data=[
    {
        category:'Турбота про себе:',
        optimal:' Дотримуйтесь здорового способу життя. Практикуйте прийняття. Культивуйте віру в здатність до розвитку.Концентруйте увагу. Вчіться пробачати.Підтримуйте стосунки та створюйте мережі соціальної підтримки. Розбивайте складні завдання на частини, якщо можна виконати.', 
        support:' Знайте свої межі. Дотримуйтесь правил здоров’я в харчуванні, вправах, режимі сну та униканні алкоголю. Вирішуйте проблеми завчасно.Визначайте та зменшуйте до мінімуму фактори стресу.Використовуйте соціальну підтримку.Контролюйте те, що можна контролювати.Регулюйте свої емоції.оворіть з самим собою.Зберігайте бачення майбутнього.',      
        resist:'Помічайте ознаки стресу та дистресу. Звертайтесь до інших. Використовуйте AVA/Mind. Контролюйте те, що можна контролювати. Використовуйте техніку "відкладених хвилювань". Використовуйте техніку вирішення проблем. Дивіться на ситуацію в цілому та приймайте своє усвідомлення.',
        help:'Шукайте соціальної підтримки! Не віддаляйтесь. Зверніться до медперсоналу. Поговоріть про свою ситуацію з керівництвом. Зменшити тривогу шляхом звернення.Використовуйте техніку "відкладених хвилювань". Будьте добрим до себе.',
 


    },
    
    {
        category:'Турбота про приятелів:',
        optimal:'Заохочуйте досягнення мети. Надайте професіоналізм комунікації. Створюйте міцну згуртованість.Використовуйте емоційне зараження. Виховуйте оптимізм. Виходьте бути відмінним',
        support:'Використовуйте активне слухання. Нормалізуйте. Спілкуйтесь ефективно. Цінуйте інших. Будьте відкритими до особливостей. Заохочуйте психологічні навички. Беріть участь у неформальних бесідах.', 
        resist:' Активно слухайте та враховуйте стрес. Заохочуйте використання психологічних навичок (самозаспокоєння, зняття м’язової напруги, знову релаксація). Мисліть позитивно. Піднімайте настрій.',
        help:' Практикуйте iCover. Зверніться по допомогу до доступних джерел. Супроводжуйте особу до місця надання допомоги. Допоможіть стабілізувати настрій.',
    },
]

function SkillsORT(){

 const renderRow = ({ item }) =>(
    <View style={styles.row}>
      <Text style={[styles.cell, styles.category]}>{item.category}</Text>
      <Text style={[styles.cell, styles.optimal]}>{item.optimal}</Text>
      <Text style={[styles.cell, styles.ready]}>{item.support}</Text>
      <Text style={[styles.cell, styles.reaction]}>{item.resist}</Text>
      <Text style={[styles.cell, styles.stress]}>{item.help}</Text>
    </View>
)

 return (
    <ScrollView>
      <View style={styles.container}>
        <ScrollView horizontal>
          <View>
            <View style={styles.headerRow}>
              <Text style={styles.headerCell}>Категорія</Text>
              <Text style={styles.headerCell}>Оптимізація</Text>
              <Text style={styles.headerCell}>Підтримування</Text>
              <Text style={styles.headerCell}>Протидія</Text>
              <Text style={styles.headerCell}>Пошук допомоги</Text>
            </View>
            <FlatList
              data={data}
              renderItem={renderRow}
              keyExtractor={(item) => item.category}
            />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );

};

export default SkillsORT;

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
  