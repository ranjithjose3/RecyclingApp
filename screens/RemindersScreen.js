import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import notifee, { TriggerType } from '@notifee/react-native';

export default function RemindersScreen() {
  const scheduleNotification = async () => {
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: 4,
    });

    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: Date.now() + 5000,
    };

    await notifee.createTriggerNotification(
      {
        title: 'Waste Pickup Reminder',
        body: "Don't forget to take out your recycling!",
        android: { channelId },
      },
      trigger
    );

    alert('Notification in 5 seconds!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today:</Text>
      <View style={[styles.card, { borderLeftColor: 'red' }]}>
        <Text style={[styles.title, { color: 'red' }]}>
          Drop off batteries @ eco-tech
        </Text>
        <Text style={styles.time}>Monday March 3 @ 9:00am</Text>
      </View>

      <Text style={styles.header}>Tomorrow:</Text>
      <View style={styles.card}>
        <Text style={styles.title}>Take out e-waste</Text>
        <Text style={styles.time}>Tuesday March 4 @ 8:00pm</Text>
      </View>

      <Text style={styles.header}>Saturday:</Text>
      <View style={styles.card}>
        <Text style={styles.title}>Take out Recycling</Text>
        <Text style={styles.time}>Friday March 7 @ 8:00pm</Text>
      </View>

      <Button title="Test Pickup Reminder" onPress={scheduleNotification} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  card: {
    borderWidth: 1,
    borderLeftWidth: 5,
    borderLeftColor: 'green',
    padding: 15,
    borderRadius: 8,
    marginVertical: 6,
  },
  title: { fontSize: 16, fontWeight: '600' },
  time: { color: 'gray', marginTop: 4 },
});
