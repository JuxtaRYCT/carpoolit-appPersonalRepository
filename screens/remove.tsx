import React from 'react';
import { View, ScrollView, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { Text, Icon } from '@rneui/themed';
import { Card } from '@rneui/themed';
import BlankSpacer from 'react-native-blank-spacer';
import AppColors from '../design-system/colors';

let styles = StyleSheet.create({
  backbutton: {
    alignSelf: 'flex-start',
    padding: 25,
    paddingTop: 40,
    paddingLeft: 24,
  },
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0
  },
  outputtext: {
    // backgroundColor: '#E5D9FF',
    // rounded: true,
    color: AppColors.text,
    fontWeight: 'normal',
    fontFamily: 'Roboto',
    padding: 8,
    backgroundColor: AppColors.primary,
    borderRadius: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: AppColors.text,
    paddingLeft: 3
  },
  leadingtext: {
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: AppColors.text,
    fontSize: 15,
    padding: 5,
    paddingTop: 10,
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: AppColors.shadow,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  dualbox: {
    flexDirection: 'column',
    alignItems: 'stretch',
    // paddingTop:10
  },
  buttons: {
    borderRadius: 24,
    padding: 10,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }

},);

interface RiderData {
  name: string;
  email: string;
  phone: string;
  gender: string;
  age: number;
}


const Remove = () => {
  const riderData: RiderData = require('../data/riderData.json');//modify to add path of anotherjson
  const {
    name,
    email,
    phone,
    gender,
    age
  } = riderData;

  return (

    <>
      <TouchableOpacity style={styles.backbutton}>
        <Image source={require('../assets/alc.png')} style={{ width: 42, height: 42 }} />
      </TouchableOpacity>
      <View style={[styles.container]}>
        <Text style={[styles.heading, { fontSize: 38, paddingBottom: 20 }]}>Rider Details</Text>
        <Card containerStyle={{ borderRadius: 10, ...styles.shadowProp, paddingBottom: 10 }}>
          <Text style={styles.heading}>Personal Details</Text>
          <Text style={styles.leadingtext}>Name</Text>
          <Text style={styles.outputtext}>{name}</Text>
          <Text style={styles.leadingtext}>Email</Text>
          <Text style={styles.outputtext}>{email}</Text>
          <Text style={styles.leadingtext}>Phone</Text>
          <Text style={styles.outputtext}>{phone}</Text>
          <View style={{ flexDirection: 'row', paddingTop: 10, alignItems: 'stretch', justifyContent: 'space-evenly' }}>
            <View style={[styles.dualbox, { width: '50%', padding: 5 }]}>
              <Text style={styles.leadingtext}>Gender</Text>
              <Text style={styles.outputtext}>{gender}</Text>
            </View>
            <View style={[styles.dualbox, { width: '50%', padding: 5 }]}>
              <Text style={styles.leadingtext}>Age</Text>
              <Text style={[styles.outputtext]}>{age}</Text>
            </View>
          </View>
        </Card>
        <BlankSpacer height={30} />
        <TouchableOpacity style={[styles.buttons, { backgroundColor: AppColors.secondary}]}>
          <Text style={{ color: AppColors.background, textAlign: 'center', fontWeight: 'bold',padding:3 }}>Remove</Text>
        </TouchableOpacity>
      </View></>

  );
};

export default Remove;