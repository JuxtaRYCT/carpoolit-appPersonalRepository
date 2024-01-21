import React from 'react';

import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Button } from '@rneui/themed';
import AppColors from '../design-system/colors';


GoogleSignin.configure({
  webClientId: '290309531485-vnb7pgofegur0g8456f3k9lbutgo89fq.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken, user } = await GoogleSignin.signIn();

    console.log(idToken);
    console.log(user);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log(error);
  }
}

const ProfileCreation = () => {
  return (
    <View>
      <Text style={styles.cartext}>Carpoolit</Text>
      <Image
        style={styles.stretch}
        source={require('../assets/profile-creation.png')} />
      <Text style={styles.text1}>Let's get you started !</Text>
      <Text style={styles.text2}>Sharing seats, sharing laughs.</Text>
      {/* <View style={styles.bottomContent}> */}
      <TouchableOpacity style={styles.googleButton} onPress={onGoogleButtonPress}>
        <Image
          style={styles.googleIcon}
          source={{
            uri: "https://i.ibb.co/j82DCcR/search.png",
          }}
        />
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
      {/* </View> */}
    </View>


  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,    
    flexDirection:'column'
    },
  cartext:{
    color: AppColors.text,
    fontFamily:"Roboto",
    fontSize: 24,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:'10%',
    marginBottom:'5%'
  },
  text1:{
    marginTop:'18%',
    fontWeight:'600',
    fontSize:24,
    color: AppColors.text,
  },
  text2:{
    fontSize:15,
    color: AppColors.text,
    marginBottom:'5%'
    paddingTop: 50,
    flexDirection: 'column'
  },
  cartext: {
    color: "#49108B",
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10%',
    marginBottom: '5%'
  },
  bottomContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 54,
    color: "white",
  },

  text1: {
    marginTop: '18%',
    fontWeight: '600',
    fontSize: 24,
    color: '#49108B',
  },
  text2: {
    fontSize: 15,
    color: '#49108B',
    marginBottom: '5%'
  },
  stretch: {
    width: 300,
    height: '37%',
    resizeMode: 'stretch',
  },
  googleButton: {
    backgroundColor: "white",
    paddingHorizontal: 34,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 24,
    padding: 10,
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '5%',
  },
  googleButtonText: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  googleIcon: {
    height: 24,
    width: 24
  }
});


export default ProfileCreation;