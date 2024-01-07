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
import TimePicker from "../components/Time";



// Main component for Joining a Ride
const HostRide: React.FC = (/*{ navigation }*/) => {
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
    findButton,
    findButtonText,
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
        <TouchableOpacity>
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
          selectionColor={"#E26EE5"}
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
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
        <TouchableOpacity style={findButton}>
          <Text style={findButtonText}>Find Rides</Text>
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
    borderColor: "#49108B",
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
    color: "#49108B",
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
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
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
    color: "#6B3EA0",
    fontFamily: "Roboto",
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
    color: "#6B3EA0",
    fontFamily: "Roboto",
  },
  // Outer button style
  genderButtonOut: {
    width: 21,
    height: 21,
    borderRadius: 10.5,
    backgroundColor: "white",
    borderColor: "#6B3EA0",
    borderWidth: 1,
    padding: 2,
  },
  // Inner button style
  genderButtonIn: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "white",
  },
  outputtext: {
    flex: 0,
    width:'100%',
    alignItems:'stretch',
    color: '#49108B',
    fontWeight: 'normal',
    fontFamily: 'Roboto',
    padding: 8,
    backgroundColor: '#E5D9FF',
    borderRadius: 10,
  },
  // Find Rides button style
  findButton: {
    flexDirection: "row",
    alignSelf: "center",
    width: '50%',
    height: 40,
    borderRadius: 50,
    backgroundColor: "#7E30E1",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  // Find Rides button text style
  findButtonText: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Roboto",
  },
});

export default HostRide;