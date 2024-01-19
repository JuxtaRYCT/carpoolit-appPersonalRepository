import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Modal
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TextFieldInput from "../components/textFieldInput";
import HostJoinSwitch from "../components/hostjoinSwitch";
import AppColors from "../design-system/colors";
import Calendar1 from "../components/Calendar";
import TimePicker from "../components/time_display";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
// Main component for Joining a Ride
import { StackNavigationProp } from "@react-navigation/stack";


type JoinRideProps = {
  navigation: StackNavigationProp<RootStackParamList, "joinride">;
};
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

const JoinRide: React.FC<JoinRideProps> = ({ navigation }) => {
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

  const findRides = () => {
    navigation.navigate('availableRides');
  };

  // Event handler for Any Gender button press
  const handlePressAny = () => {
    setGenderButtonInColorAny("#6B3EA0");
    setGenderButtonInColorSame("white");
  };

  // Event handler for Same Gender button press
  const handlePressSame = () => {
    setGenderButtonInColorSame(AppColors.accent);
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
          selectionMode={2}
          roundCorner={true}
          option1={"Host"}
          option2={"Join"}
          selectionColor={AppColors.hostjointoggle}
          navigation={navigation}
          hostridefunc={() => navigation.navigate("hostRide")}
          joinridefunc={() => {}}
        />
      </View>
      <View style={list}>
        <Text style={listHeader}>Trip Details</Text>
        <TextFieldInput icon="location-arrow" placeholder="From" />
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
        <TouchableOpacity style={findButton} onPress={findRides}>
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
  //Needs to be fixed
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
    marginTop: 70,
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
    backgroundColor: AppColors.background,
    flexDirection: "column",
    alignSelf:"center",
    width: '95%',
    height: "45%",
    borderRadius: 13,
    elevation: 20,
    marginTop: 60,
    alignItems: "center",
  },
  // List header style
  listHeader: {
    fontSize: 18,
    fontWeight: "700",
    color: AppColors.accent,
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
    color: AppColors.accent,
    fontFamily: "Roboto",
  },
  // Outer button style
  genderButtonOut: {
    width: 21,
    height: 21,
    borderRadius: 10.5,
    backgroundColor: AppColors.background,
    borderColor: AppColors.accent,
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
  // Find Rides button style
  findButton: {
    
    width: 202,
    height: 40,
    borderRadius: 50,
    backgroundColor: AppColors.secondary,
    alignSelf:"center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    
  },
outputtext: {
  flex: 0,
  width:'90%',
  alignItems:'stretch',
  color: AppColors.text,
  fontWeight: 'normal',
  fontFamily: 'Roboto',
  padding: 8,
  backgroundColor: AppColors.primary,
  borderRadius: 10,
},
  // Find Rides button text style
  findButtonText: {
    fontSize: 14,
    fontWeight: "normal",
    color: AppColors.background,
    textAlign: "center",
    fontFamily: "Roboto",
  },
  
});

export default JoinRide;