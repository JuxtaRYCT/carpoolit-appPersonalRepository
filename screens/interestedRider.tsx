import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import interestedData from "../data/interestedRiders.json";
import joinedData from "../data/joinRiders.json";
import InterestedCard from "../components/InterestedCard";
import { Ionicons } from "@expo/vector-icons";

const InterestedRider: React.FC = () => {
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
  const handleCardPress = (name: string) => {
    console.log(name);
    // Add any other logic you want to execute on card press
  };
  return (
    <View style={page}>
      <View style={icon}>
        <TouchableOpacity>
          <Text>
            <Ionicons name="arrow-back" size={20} color="#49108B" />{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={headerContainer}>
        <Text style={header1}>Interested Rider</Text>
      </View>
      <ScrollView style={scroll}>
        {interestedData.map((item, index) => (
          <View style={card} key={index}>
            <TouchableOpacity onPress={() => handleCardPress(item.name)}>
              <InterestedCard
                name={item.name}
                onPress={() => handleCardPress(item.name)}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={container}>
        <Text style={header2}>Riders Joined</Text>
      </View>
      <ScrollView style={scroll}>
        {joinedData.map((item, index) => (
          <View style={card} key={index}>
            <TouchableOpacity onPress={() => handleCardPress(item.name)}>
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

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
  },
  icon: {
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
    alignItems: "center",
    marginTop: 90,
  },
  header1: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#49108B",
    textAlign: "center",
    fontFamily: "Roboto",
    marginBottom: 20, // Add margin bottom to separate from the ScrollView
  },
  header2: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#49108B",
    textAlign: "center",
    fontFamily: "Roboto",
    marginBottom: 20, // Add margin bottom to separate from the ScrollView
  },
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  card: {
    justifyContent: "center",
    width: 334,
    height: 66,
    marginBottom: 25,
  },
  scroll: {
    height: 1,
    marginBottom: 47,
  },
});

export default InterestedRider;
