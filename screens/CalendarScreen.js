import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reminders</Text>
      <Calendar
        markedDates={{
          '2025-03-03': { marked: true, dotColor: 'green' },
          '2025-03-05': { marked: true, dotColor: 'orange' },
        }}
      />
      <View style={styles.card}>
        <Text style={styles.title}>Compost Pick-up</Text>
        <Text style={styles.time}>9:00am - 11:00am</Text>
      </View>
      <View style={[styles.card, { borderLeftColor: 'orange' }]}>
        <Text style={styles.title}>Garbage Pick-up</Text>
        <Text style={styles.time}>7:00am - 12:00pm</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: {
    borderWidth: 1,
    borderLeftWidth: 5,
    borderLeftColor: 'green',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
  },
  title: { fontSize: 16, fontWeight: '600' },
  time: { color: 'gray', marginTop: 4 },
});
