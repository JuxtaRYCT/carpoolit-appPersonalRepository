import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AppColors from '../design-system/colors';

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
              monthTextColor: AppColors.accent,
              textMonthFontSize: 25,
              textMonthFontWeight: 'bold',
              arrowColor: AppColors.accent,
              dayTextColor: AppColors.accent,
              textDisabledColor: AppColors.background,
            }}
            onDayPress={handleDayPress}
            onCalendarClose={onCalendarClose}
            markedDates={selectedDate ? { [selectedDate]: { selected: true, selectedColor: AppColors.accent, textColor: AppColors.text } } : {}}
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
    backgroundColor: AppColors.background,
    borderRadius: 8,
    shadowColor: AppColors.shadow,
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
    backgroundColor: AppColors.background,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: AppColors.accent,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 16,
    alignSelf: 'center',
  },
  submitText: {
    color: AppColors.background,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Calendar1;