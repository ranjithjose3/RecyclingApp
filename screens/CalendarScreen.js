import React from 'react';
import { View, Text } from 'react-native';
import { CalendarProvider, ExpandableCalendar, AgendaList } from 'react-native-calendars';
import { agendaItems, getMarkedDates } from '../utils/mockData';

export default function CalendarScreen() {
  const today = new Date().toISOString().split('T')[0];

  const renderItem = ({ item }) => {
    if (!item?.title) return null;
    return (
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          margin: 5,
          borderRadius: 5
        }}
      >
        <Text>{item.hour} - {item.title}</Text>
      </View>
    );
  };

  return (
    <CalendarProvider date={today} showTodayButton>
      <ExpandableCalendar
        markingType={'multi-dot'} // ✅ Multi-dot mode
        firstDay={1}
        markedDates={getMarkedDates()}
        theme={{
          todayTextColor: '#007AFF',
          selectedDayBackgroundColor: '#00adf5'
        }}
      />
      <AgendaList
        sections={agendaItems}
        renderItem={renderItem}
        sectionStyle={{ backgroundColor: '#f2f2f2' }}
      />
    </CalendarProvider>
  );
}
