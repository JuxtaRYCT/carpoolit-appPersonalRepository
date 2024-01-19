import React from 'react';
import { View, Image ,Text, StyleSheet } from 'react-native';
import AppColors from '../design-system/colors';



const ProfileCreation = () => {
  return (
    <View>
      <Text style ={styles.cartext}>Carpoolit</Text>
      <Image
        style={styles.stretch}
        source={require('../assets/profile-creation.png')} />
        <Text style={styles.text1}>Let's get you started !</Text>
        <Text style={styles.text2}>Sharing seats, sharing laughs.</Text>
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
  },
  stretch: {
    width:300,
    height: '37%',
    resizeMode: 'stretch',
  },
});


export default ProfileCreation;