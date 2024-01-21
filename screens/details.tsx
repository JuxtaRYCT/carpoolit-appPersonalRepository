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
import { Ionicons } from '@expo/vector-icons';
import Calendar1 from "../components/Calendar";
import { StackNavigationProp } from "@react-navigation/stack";
import AppColors from "../design-system/colors";

type RootStackParamList = {
  joinride: undefined;
  availableRides: undefined;
  interestedRider: undefined;
  hostRide: undefined;
  details: undefined;
  profileCreation: undefined;
  accept: undefined;
  remove: undefined;
  profilepage:undefined;
  filtermodal:undefined
};

interface DetailInputProps {
  navigation:StackNavigationProp<RootStackParamList,"details">;
}

const DetailInput: React.FC<DetailInputProps> = ({navigation}) => {
  const {
    page,
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
        <TouchableOpacity onPress={()=>{
          navigation.pop();
        }}>
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: AppColors.shadow }}>
        <Calendar1 onDateSelect={handleDateSelect} />
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
  heading: {
    fontSize: 38,
    fontWeight: "bold",
    color: AppColors.text,
    textAlign: "center",
    fontFamily: "Roboto",
    marginTop: 88,
    alignItems: "center",
  },
  list: {
    backgroundColor: AppColors.background,
    flexDirection: "column",
    width: 343,
    height: 360,
    borderRadius: 13,
    elevation: 20,
    marginTop: 60,
    alignItems: "center",
    alignSelf:"center"
  },
  listHeader: {
    fontSize: 18,
    fontWeight: "700",
    color: AppColors.accent,
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
    color: AppColors.text,
    fontFamily: "Roboto",
    marginBottom: 5,
    
  },
  input: {
    color:AppColors.accent,
    width: "100%",
    height: 40,
    borderRadius: 10,
    padding: 10,
    backgroundColor:AppColors.primary
  },
  submitButtonContainer: {
    alignItems: "center",
    marginTop: '18%',
  },
  submitButton: {
    width: 150,
    height: 40,
    borderRadius: 40, 
    backgroundColor: AppColors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: AppColors.background,
    textAlign: "center",
    fontFamily: "Roboto",
  },
});

export default DetailInput;