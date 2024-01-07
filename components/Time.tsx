import React, { useState } from 'react';
import { Button, View, Text, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TimePicker: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [buttonText, setButtonText] = useState('Select Time');

  const handleTimeChange = (event: any, selectedTime: Date | undefined) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedTime) {
      setTime(selectedTime);
      setButtonText(selectedTime.toLocaleTimeString());
    }
  };

  const showTimepicker = () => {
    setShowPicker(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showTimepicker}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleTimeChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6B3EA0',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TimePicker;
