import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RideCard from "../components/rideCard";
import data from "../data/availableRides.json";
import profilePic from "../assets/profile.png";
import filter from "../assets/filter.png";
import search from "../assets/search.png";
import back from "../assets/alc.png";
import { StackNavigationProp } from "@react-navigation/stack";
import FilterModal from "../components/filterModal";

interface CardData {
  startingLocation: string;
  destination: string;
  date: Date;
  time: Date;
  cost: number;
  hostProfilePic: string;
  hostName: string;
}
type RootStackParamList = {
  JoinRide: undefined;
  availableRides: undefined;
  interestedRider: undefined;
  hostRide: undefined;
  details: undefined;
  profileCreation: undefined;
  accept: undefined;
  remove: undefined;
  filtermodal: undefined;
};
type AvailableRideProps = {
  navigation : StackNavigationProp<RootStackParamList, "availableRides">;
}

const AvailableRides: React.FC<AvailableRideProps> = ({navigation}) => {
  const jsonData: CardData[] = data as unknown as CardData[];
  const availableRides = () => {
    navigation.navigate('interestedRider');
  };
  const popPage = () => {
    navigation.pop();
  }
  const {
    page,
    iconContainer,
    headerContainer,
    header1,
    container,
    searchBarContainer,
    searchBar,
    filterIcon,
    searchIcon,
    flatListContainer, // New style for the flatList container
    flatList, // New style for the flatList
  } = styles;

  return (
    <View style={page}>
      {/* Back button and Profile button */}
      <View style={iconContainer}>
        <TouchableOpacity
          onPress={() =>{ popPage();
            console.log("Back button pressed");}}
        >
          <Image style={{ width: 33, height: 33 }} source={back} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.profileButton}
          onPress={() => {console.log("Profile button pressed");
          navigation.navigate('profileCreation');}}  
        >
          <Image style={{ width: 28, height: 28 }} source={profilePic} />
        </TouchableOpacity>
      </View>

      {/* Header for Interested Riders */}
      <View style={headerContainer}>
        <Text style={header1}>Available Rides</Text>
      </View>

      {/* Search bar */}
      <View style={searchBarContainer}>
        <TouchableOpacity style={searchIcon}>
          <Image style={{ width: 20, height: 20 }} source={search} />
        </TouchableOpacity>
        <TextInput style={searchBar} placeholder="" />
        <TouchableOpacity 
          style={filterIcon}
          onPress={() => {console.log("Filter button pressed");
          navigation.navigate('filtermodal');}}
        >
          <Image style={{ width: 20, height: 20 }} source={filter} />
        </TouchableOpacity>
      </View>

      {/* FlatList for Available Rides */}
      <View style={flatListContainer}>
      <FlatList
        style={flatList}
        data={jsonData}
        renderItem={({ item }) => (
          <TouchableOpacity 
              onPress={() => console.log("Ride Card button pressed")}
              activeOpacity={0.35}
          >
            <RideCard data={item} />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '10%',
    alignContent: "center",
  },
  flatList: {
    width: "100%",
    marginLeft: -1,
    marginRight: -1,
  },
  page: {
    flex: 1,
    flexDirection: "column",
    marginTop: '5%',
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    marginTop: '0%',
  },
  backButton: {
    padding: 8,
    borderColor: "#49108B", // Purple color
    borderRadius: 14, // Adjust the radius as needed
    borderWidth: 3,
    width: 28,
    height: 28,
  },
  profileButton: {
    padding: 8,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: '15%',
  },
  header1: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#49108B",
    textAlign: "center",
    fontFamily: "Roboto",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: '4%',
    borderRadius: 8,
    width: "90%",
    backgroundColor: "rgba(126, 126, 126, 0.18)",
  },
  searchBar: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
  },
  filterIcon: {
    marginLeft: 0,
  },
  searchIcon: {
    marginLeft: 0,
  },
  flatListContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    justifyContent: "center", // Center horizontally
    alignItems: "center",
    marginTop: '4%',
    alignContent: "center",
    marginLeft: 15
  },
});

export default AvailableRides;
