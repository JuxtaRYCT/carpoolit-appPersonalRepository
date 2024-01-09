import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Modal,
} from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

interface DetailInputProps {}

const DetailInput: React.FC<DetailInputProps> = () => {
  const {
    page,
    dropdown,
    heading,
    list,
    listHeader,
    inputContainer,
    inputLabel,
    input,
    submitButtonContainer,
    submitButton,
    submitButtonText,
  } = styles;

  const [gender, setGender] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [age, setAge] = useState<string | null>(null);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const handleSubmit = () => {
    console.log("Gender:", gender);
    console.log("Phone Number:", phoneNumber);
    console.log("Age:", age);
  };
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setShowCalendar(false); 
  };

  return (

    <SafeAreaView style={page}>
      <View style={{
        marginTop:10
      }}>
        <TouchableOpacity>
            <Ionicons name='arrow-back-circle-outline' size={38} color="#49108B" />
        </TouchableOpacity>
      </View>
      <Text style={heading}>Additional details</Text>
      <View style={list}>
        <Text style={listHeader}>User Details</Text>
        <View style={inputContainer}>
          <Text style={inputLabel}>Gender:</Text>
          <TextInput
            style={input}
            placeholder="Enter your gender"
            onChangeText={(text) => setGender(text)}
          />
        </View>
        <View style={inputContainer}>
          <Text style={inputLabel}>Phone Number:</Text>
          <TextInput
            style={input}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            maxLength={10}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <View style={inputContainer}>
          <Text style={inputLabel}>Age:</Text>
          {!showCalendar ? (
        <TouchableOpacity style = {{flexDirection:'row',paddingTop:12}}onPress={()=>setShowCalendar(true)}>
          <Text style={[styles.input,{padding:10}]}>{selectedDate ? selectedDate : 'Date/Time'}</Text>
        </TouchableOpacity>):(
          <Modal visible={showCalendar} animationType="slide" transparent={true}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            // placeholderStyle={styles.placeholderStyle}
            // selectedTextStyle={styles.selectedTextStyle}
            // inputSearchStyle={styles.inputSearchStyle}
            // iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                color={isFocus ? 'blue' : 'black'}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>
        </Modal>)
        }
        </View>
      </View>
      <View style={submitButtonContainer}>
        <TouchableOpacity style={submitButton} onPress={handleSubmit}>
          <Text style={submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 50,
  },
  profile: {
    width: 44,
    height: 44,
    position: "absolute",
    borderRadius: 22,
    borderWidth: 4,
    overflow: "hidden",
    right: 0,
    marginTop: 44,
    alignItems: "center",
  },
  dropdown : {
    width: 100,
    height: 100
  },
  heading: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#49108B",
    textAlign: "center",
    fontFamily: "Roboto",
    marginTop: 88,
    alignItems: "center",
  },
  list: {
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    width: 343,
    height: 360,
    borderRadius: 13,
    elevation: 20,
    marginTop: 60,
    alignItems: "center",
  },
  listHeader: {
    fontSize: 18,
    fontWeight: "700",
    color: "#6B3EA0",
    fontFamily: "Roboto",
    marginTop: 19,
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 20,
    width: "80%",
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#49108B",
    fontFamily: "Roboto",
    marginBottom: 5,
    
  },
  input: {
    color:'#6B3EA0',
    width: "100%",
    height: 40,
    borderRadius: 10,
    padding: 10,
    backgroundColor:'#E5D9FF'
  },
  submitButtonContainer: {
    alignItems: "center",
    marginTop: '18%',
  },
  submitButton: {
    width: 150,
    height: 40,
    borderRadius: 40, 
    backgroundColor: "#7E30E1",
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Roboto",
  },
});

export default DetailInput;