import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TextFieldInput from "../components/textFieldInput";
import HostJoinSwitch from "../components/hostjoinSwitch";
import Calendar1 from "../components/Calendar";
import PassengerCounter from "../components/passengerCounter";
import { Card } from "@rneui/themed";
import TimePicker from "../components/time_display";
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
};
interface HostRideProps { 
  navigation: StackNavigationProp<RootStackParamList>;
}

// Main component for Joining a Ride
const HostRide: React.FC<HostRideProps> = ({navigation}) => {
  // Destructuring styles for cleaner usage
  const {
    page,
    profile,
    heading,
    switchStyle,
    list,
    listHeader,
    genderSection,
    spacing,
    genderText,
    genderButtonOut,
    genderButtonIn,
    hostButton,
    hostButtonText,
  } = styles;

  // State variables to manage button colors
  const [genderButtonInColorAny, setGenderButtonInColorAny] = useState("white");
  const [genderButtonInColorSame, setGenderButtonInColorSame] = useState("white");

  // Event handler for Any Gender button press
  const handlePressAny = () => {
    setGenderButtonInColorAny("#6B3EA0");
    setGenderButtonInColorSame("white");
  };

  // Event handler for Same Gender button press
  const handlePressSame = () => {
    setGenderButtonInColorSame("#6B3EA0");
    setGenderButtonInColorAny("white");
  };

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setShowCalendar(false); // Close the calendar after selecting a date
  };

  return (
    <SafeAreaView style={page}>
      <View style={profile}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('profilepage');
        }}>
          <Text>
            <Ionicons name="person" size={38} color="#49108B" />{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={heading}>Ride</Text>
      <View style={switchStyle}>
        <HostJoinSwitch
          selectionMode={1}
          roundCorner={true}
          option1={"Host"}
          option2={"Join"}
          selectionColor={AppColors.hostjointoggle}
          navigation={navigation}
          hostridefunc={() => {}}//since hostride is the current page
          joinridefunc={() => {navigation.pop();}}
            //since joinride will be beneath it in the stack
          

        />
      </View>
      <Card containerStyle={list}>
        <Text style={listHeader}>Trip Details</Text>
        <TextFieldInput icon="question" placeholder="From" />
        <TextFieldInput icon="location-arrow" placeholder="To" />
        {!showCalendar ? (
        <TouchableOpacity style = {{flexDirection:'row',paddingTop:12}}onPress={()=>setShowCalendar(true)}>
          <Text style={[styles.outputtext,{padding:10}]}>{selectedDate ? selectedDate : 'Date'}</Text>
        </TouchableOpacity>):(
          <Modal visible={showCalendar} animationType="slide" transparent={true}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: AppColors.shadow }}>
        <Calendar1 onDateSelect={handleDateSelect} />
        </View>
        </Modal>)
        }
        <TimePicker/>
        <PassengerCounter />
        <TextFieldInput icon="rupee" placeholder="Total Cost" />
        <TextFieldInput icon="car" placeholder="Vehicle Type" />
        <View style={genderSection}>
          <TouchableOpacity style={[genderButtonOut, spacing]} onPress={handlePressAny}>
            <View style={[genderButtonIn, { backgroundColor: genderButtonInColorAny }]} />
          </TouchableOpacity>
          <Text style={[genderText, spacing]}>Any Gender</Text>
          <TouchableOpacity style={[genderButtonOut, spacing]} onPress={handlePressSame}>
            <View style={[genderButtonIn, { backgroundColor: genderButtonInColorSame }]} />
          </TouchableOpacity>
          <Text style={[genderText, spacing]}>Same Gender</Text>
        </View>
      </Card>
      <View>
        <TouchableOpacity style={hostButton} onPress={()=>{
          navigation.navigate('details');
        }}>
          <Text style={hostButtonText}>Host Ride</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  // Styles
  page: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
  },
  // Profile icon style
  profile: {
    width: 44,
    height: 44,
    position: "absolute",
    borderRadius: 22,
    borderColor: AppColors.text,
    borderWidth: 4,
    overflow: "hidden",
    right: 0,
    marginTop: 44,
    alignItems: "center",
  },
  // Heading style
  heading: {
    fontSize: 38,
    fontWeight: "bold",
    color: AppColors.text,
    textAlign: "center",
    fontFamily: "Roboto",
    marginTop:70,
    alignItems: "center",
  },
  // Switch style
  switchStyle: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  // List style
  list: {
    backgroundColor: AppColors.background,
    flexDirection: "column",
    alignSelf:"center",
    width: 343,
    height: 'auto',
    borderRadius: 13,
    elevation: 10,
    marginTop: 30,
    alignItems: "center",
    paddingLeft: 25,
  },
  // List header style
  listHeader: {
    fontSize: 18,
    fontWeight: "700",
    color: AppColors.accent,
    fontFamily: "Roboto",
    alignSelf:"center",
    marginTop: 10,
  },
  // Gender selection section style
  genderSection: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
  },
  // Spacing style
  spacing: {
    marginRight: 10,
  },
  // Gender text style
  genderText: {
    fontSize: 16,
    fontWeight: "500",
    color: AppColors.accent,
    fontFamily: "Roboto",
  },
  // Outer button style
  genderButtonOut: {
    width: 21,
    height: 21,
    borderRadius: 10.5,
    backgroundColor: AppColors.background,
    borderColor: AppColors.text,
    borderWidth: 1,
    padding: 2,
  },
  // Inner button style
  genderButtonIn: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: AppColors.background,
  },
  outputtext: {
    flex: 0,
    width:'100%',
    alignItems:'stretch',
    color: AppColors.text,
    fontWeight: 'normal',
    fontFamily: 'Roboto',
    padding: 8,
    backgroundColor: AppColors.primary,
    borderRadius: 10,
  },
  // Find Rides button style
  hostButton: {
    flexDirection: "row",
    alignSelf: "center",
    width: '50%',
    height: 40,
    borderRadius: 50,
    backgroundColor: AppColors.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  // Find Rides button text style
  hostButtonText: {
    fontSize: 14,
    fontWeight: "normal",
    color: AppColors.background,
    textAlign: "center",
    fontFamily: "Roboto",
  },
});

export default HostRide;