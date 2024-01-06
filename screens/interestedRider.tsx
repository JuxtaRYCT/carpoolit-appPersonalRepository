// Import necessary components and libraries from React and React Native
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// Import data for interested and joined riders
import interestedData from "../data/interestedRiders.json";
import joinedData from "../data/joinRiders.json";

// Import Ionicons from Expo library
import { Ionicons } from "@expo/vector-icons";

// Import custom InterestedCard component
import InterestedCard from "../components/InterestedCard";

// Define the InterestedRider functional component
const InterestedRider: React.FC = () => {
  // Destructure styles for easier use
  const {
    page,
    icon,
    headerContainer,
    header1,
    container,
    header2,
    card,
    scroll,
  } = styles;

  // Handle card press event
  const handleCardPress = (name: string) => {
    console.log(name);
    // Add any other logic 
  };

  // Render the component
  return (
    <View style={page}>
      {/* Back button */}
      <View style={icon}>
        <TouchableOpacity>
          <Text>
            {/* Ionicons arrow-back icon */}
            <Ionicons name="arrow-back" size={20} color="#49108B" />{" "}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Header for Interested Riders */}
      <View style={headerContainer}>
        <Text style={header1}>Interested Rider</Text>
      </View>

      {/* ScrollView for Interested Riders */}
      <ScrollView style={scroll}>
        {interestedData.map((item, index) => (
          <View style={card} key={index}>
            <TouchableOpacity onPress={() => handleCardPress(item.name)}>
              {/* Render InterestedCard component */}
              <InterestedCard
                name={item.name}
                onPress={() => handleCardPress(item.name)}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Header for Riders Joined */}
      <View style={container}>
        <Text style={header2}>Riders Joined</Text>
      </View>

      {/* ScrollView for Joined Riders */}
      <ScrollView style={scroll}>
        {joinedData.map((item, index) => (
          <View style={card} key={index}>
            <TouchableOpacity onPress={() => handleCardPress(item.name)}>
              {/* Render InterestedCard component for joined riders */}
              <InterestedCard
                name={item.name}
                onPress={() => handleCardPress(item.name)}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// Define styles for the component using StyleSheet.create
const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
  },
  icon: {
    // Styles for the back button
    width: 28,
    height: 28,
    position: "absolute",
    borderRadius: 14,
    borderColor: "#49108B",
    borderWidth: 3,
    overflow: "hidden",
    left: 1,
    marginTop: 45,
    alignItems: "center",
  },
  headerContainer: {
    // Styles for the header container of Interested Riders
    alignItems: "center",
    marginTop: 90,
  },
  header1: {
    // Styles for the header text of Interested Riders
    fontSize: 38,
    fontWeight: "bold",
    color: "#49108B",
    textAlign: "center",
    fontFamily: "Roboto",
    marginBottom: 20, // Add margin bottom to separate from the ScrollView
  },
  header2: {
    // Styles for the header text of Riders Joined
    fontSize: 38,
    fontWeight: "bold",
    color: "#49108B",
    textAlign: "center",
    fontFamily: "Roboto",
    marginBottom: 20, // Add margin bottom to separate from the ScrollView
  },
  container: {
    // Styles for the container of Riders Joined header
    alignItems: "center",
    marginTop: 20,
  },
  card: {
    // Styles for the card container
    justifyContent: "center",
    width: 334,
    height: 66,
    marginBottom: 25,
  },
  scroll: {
    // Styles for the ScrollView
    height: 1,
    marginBottom: 47,
  },
});

// Export the InterestedRider component as the default export
export default InterestedRider;

