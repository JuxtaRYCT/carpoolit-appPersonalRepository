import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Accept from './screens/accept';
import Remove from './screens/remove';
import HostJoinSwitch from './components/hostjoinSwitch';
import HostRide from './screens/hostRide';
import TimePicker from './components/Time';
import JoinRide from './screens/joinRide';
import DetailInput from './screens/details';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HostRide/>
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
});