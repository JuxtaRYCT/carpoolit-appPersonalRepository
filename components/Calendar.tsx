import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

interface Calendar1Props {
  onDateSelect: (selectedDate: string) => void;
}

const Calendar1: React.FC<Calendar1Props> = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDayPress = (day: any) => {
    const selectedDateString = day.dateString;
    setSelectedDate(selectedDateString);
  };

  const onCalendarClose = () => {
    if (selectedDate) {
      onDateSelect(selectedDate);
    }
  };

  const handleSubmit = () => {
    if (selectedDate) {
      onDateSelect(selectedDate);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>
        <View style={styles.calendarContainer}>
          <Calendar
            disableAllTouchEventsForDisabledDays={true}
            style={styles.calendar}
            theme={{
              monthTextColor: '#6B3EA0',
              textMonthFontSize: 25,
              textMonthFontWeight: 'bold',
              arrowColor: '#6B3EA0',
              dayTextColor: '#6B3EA0',
              textDisabledColor: '#FFFFFF',
            }}
            onDayPress={handleDayPress}
            onCalendarClose={onCalendarClose}
            markedDates={selectedDate ? { [selectedDate]: { selected: true, selectedColor: '#6B3EA0', textColor: 'white' } } : {}}
            monthFormat={'MMM yyyy'}
          />

        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 30,
    margin: 16,
    width: '100%',
  },
  calendar: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: '#6B3EA0',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 16,
    alignSelf: 'center',
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Calendar1;