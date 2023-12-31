import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TextFieldInput from "../components/textFieldInput";
import HostJoinSwitch from "../components/hostjoinSwitch";

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
      <View style={list}>
        <Text style={listHeader}>Trip hello</Text>
        <TextFieldInput icon="cash" placeholder="From" />
        <TextFieldInput icon="location-arrow" placeholder="To" />
        <TextFieldInput icon="calendar-o" placeholder="Date/Time" />
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
      </View>
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
    marginTop: 88,
    alignItems: "center",
  },
  // Switch style
  switchStyle: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  // List style
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
  // List header style
  listHeader: {
    fontSize: 18,
    fontWeight: "700",
    color: "#6B3EA0",
    fontFamily: "Roboto",
    marginTop: 19,
  },
  // Gender selection section style
  genderSection: {
    flexDirection: "row",
    marginTop: 30,
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
  // Find Rides button style
  findButton: {
    width: 202,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#7E30E1",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft: 62,
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
