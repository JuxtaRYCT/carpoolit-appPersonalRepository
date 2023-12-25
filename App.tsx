import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Accept from './screens/accept';
import Remove from './screens/remove';

export default function App() {
  // const riderData = {
  //   name: 'John Doe',
  //   email: 'johndoe@example.com',
  //   phone: '+91 9876543210',
  //   gender: 'Female',
  //   age: 22,
  // };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      {/* <Accept riderData={riderData} /> */}
      {/* <Remove riderData={riderData} /> */}
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
