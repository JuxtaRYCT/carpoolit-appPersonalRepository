import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppColors from '../design-system/colors';
import MarqueeText from 'react-native-marquee';

interface CardVariables {
  data: {
    startingLocation: string;
    destination: string;
    date: Date;
    time: Date;
    cost: number;
    hostProfilePic: string;
    hostName: string;
  };
}

const RideCard: React.FC<CardVariables> = ({ data }) => {
  const formattedDate = data.date && data.date instanceof Date ? data.date.toDateString() : 'Invalid Date';

  const formattedTime = data.time && data.time instanceof Date ? data.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Invalid Time';

  return (
    <View style={styles.card}>
      <View style={styles.location}>
        <Text style={styles.title}>{data.startingLocation}  </Text>
        <Text style={styles.title}>{data.destination}</Text>
        <View style={styles.tripInfo}>
          <Text style={styles.tripDate}>{formattedDate}</Text>
          <Text style={styles.tripTime}>{formattedTime}</Text>
        </View>
        
        <Text style={styles.tripCost}>₹{data.cost}/person</Text>
      </View>
      
      <View style={styles.hostInfo}>
        <Image style={styles.profilePic} source={{ uri: data.hostProfilePic }} />
        <MarqueeText style={styles.title} speed={0.25} delay={1000}>{data.hostName}</MarqueeText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: AppColors.primary,
    borderRadius: 20,
    padding: 20,
    margin: 10,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between'
    
  },

  location:{
    flexDirection: 'column'
  },
  title: {
    fontSize: 20,
    color: AppColors.text,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Roboto',

  },

  tripInfo:{
    flexDirection:'row',
    marginTop: 10
  },

  tripDate: {
    color: AppColors.text,
    fontFamily: 'Roboto',
    fontSize: 18,
    marginRight: 15
    
  },

  tripTime:{
    color: AppColors.text,
    fontSize: 18,
    marginRight: 20
  },

  tripCost:{
    fontSize: 20,
    color: AppColors.text,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  
  hostInfo: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    marginTop: 5,
    alignContent:'center',
    width: 77.5
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
    marginLeft: 20
  },


});

export default RideCard;


/*

This is the App.tsx code for running the card component on the screen, it fetches the data from riderData.json file.

import React from 'react';
import { View, StyleSheet } from 'react-native';
import RideCard from './components/rideCard';
import data from './rideData.json';

interface CardData {
  startingLocation: string;
  destination: string;
  date: Date;
  time: Date;
  cost: number;
  hostProfilePic: string;
  hostName: string;
}

const App: React.FC = () => {
  const jsonData: CardData[] = data as unknown as CardData[];

  return (
    <View style={styles.container}>
      {jsonData.map((cardData, index) => (
        <RideCard key={index} data={cardData} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default App;


*/
