import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Accept from './screens/accept';
// import Remove from './screens/remove';
import HostJoinSwitch from './components/hostjoinSwitch';
import HostRide from './screens/hostRide';
import TimePicker from './components/time_display';
import JoinRide from './screens/joinRide';
import DetailInput from './screens/details';
import ProfileCreation from './screens/profile-creation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InterestedRider from './screens/interestedRider';
import Dashboard from './screens/profile-page';
import AvailableRides from './screens/availableRides';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Remove from './screens/remove';
import { createStackNavigator } from '@react-navigation/stack';
import FilterModal from './components/filterModal';
import RideCard from './components/rideCard';


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
const Stack = createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='joinride'>
      <Stack.Screen name="joinride" component={JoinRide} />
      <Stack.Screen name="hostRide" component={HostRide} />
      <Stack.Screen name="interestedRider" component={InterestedRider} />
      <Stack.Screen name="details" component={DetailInput} />
      <Stack.Screen name="profileCreation" component={ProfileCreation} />
      <Stack.Screen name="accept" component={Accept} />
      <Stack.Screen name="remove" component={Remove} />
      <Stack.Screen name="availableRides" component={AvailableRides} />
      <Stack.Screen name="profilepage" component={Dashboard} />
      <Stack.Screen name="filtermodal" component={FilterModal} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
