import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TableAdaptation = () => {
  const tableHead = [
    'Поширені схеми некорисного мислення',
    'Приклади некорисних думок',
    'Приклади корисних думок',
  ];
  const tableData = [
    [
      'Надмірне узагальнення: висновок на основі одного доказу.',
      '"Я погана людина, бо зробив цю помилку"',
      '"Я зробив помилку, і почуваю провину."',
    ],
    [
      'Читання думок: припущення думок і намірів інших з обмеженою інформацією',
      '"Мій напарник не відразу відповів на моє повідомлення, тож напевно, йому байдуже через що я проходжу"',
      '"Можливо, мій партнер зайнятий, а я стурбований, бо зазнавав образи в минулому"',
    ],
    [
      'Емоційне обґрунтування: використання почуттів для висновків без урахування іншої інформації',
      '"Я відчуваю себе некомпетентним, тому напевно, в мене немає того, що потрібно для виконання цієї роботи"',
      '"Навіть якщо я відчуваю себе некомпетентним, немає фактичних доказів того, що я не можу виконувати свою роботу"',
    ],
  ];

  return (
    <View style={styles.container}>
      {/* Table Header */}
      <View style={styles.header}>
        {tableHead.map((header, index) => (
          <View
            key={index}
            style={index === 0 ? styles.firstColumnHeader : styles.headerCell}
          >
            <Text style={styles.headerText}>{header}</Text>
          </View>
        ))}
      </View>

      {/* Table Body */}
      {tableData.map((rowData, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {rowData.map((cellData, cellIndex) => (
            <View
              key={cellIndex}
              style={cellIndex === 0 ? styles.firstColumnCell : styles.cell}
            >
              <Text style={styles.text}>{cellData}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default TableAdaptation;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F7FDF9',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#388E3C', // Green background for headers
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  headerCell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  firstColumnHeader: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFA726', // Orange background for the first column header
  },
  headerText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  firstColumnCell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFD54F', // Yellow background for the first column
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333333',
  },
});
