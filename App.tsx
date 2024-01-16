import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Accept from './screens/accept';
import Remove from './screens/remove';
import HostJoinSwitch from './components/hostjoinSwitch';
import HostRide from './screens/hostRide';
import TimePicker from './components/time_display';
import JoinRide from './screens/joinRide';
import DetailInput from './screens/details';
import ProfileCreation from './screens/profile-creation';
import RideCard from './components/rideCard';
import Dashboard from './screens/profile-page';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ProfileCreation/>
      {/* <Dashboard/> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: "white",
    borderRadius: 4,
    paddingHorizontal: 34,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
   },
   googleButtonText: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '600'
   },
   googleIcon: {
    height: 24,
    width: 24
   }
});