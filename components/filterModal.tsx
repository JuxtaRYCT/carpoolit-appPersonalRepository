import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions } from 'react-native';
import AppColors from '../design-system/colors';
import TextFieldInput from './textFieldInput';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import JoinRide from '../screens/joinRide';
var {height, width} = Dimensions.get('window');//to get window dimensions for dynamic attributes


// const JoinRide = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

type RootStackParamList = {
  JoinRide: undefined;
  availableRides: undefined;
  interestedRider: undefined;
  hostRide: undefined;
  details: undefined;
  profileCreation: undefined;
  accept: undefined;
  remove: undefined;
  filtermodal: undefined;
};
type FilterModalProps = {
  navigation: NativeStackNavigationProp<RootStackParamList,"filtermodal">;
};
const FilterModal : React.FC<FilterModalProps> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Would you like to change your ride request?</Text>
            <TextFieldInput icon="clock" placeholder="Select time range " />
                <View style = {{flexDirection: 'row', padding:20}}>
                <View style = {{ paddingLeft:20,paddingRight:20}}>
                <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=>{
                setModalVisible(!modalVisible);
                Alert.alert("You will be redirected to the Join Ride page");
                //Enter the Navigation Code here
                navigation.navigate('JoinRide');

              }}>
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable></View>
            <View style = {{ paddingLeft:20,paddingRight:20}}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=>{
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
            </View>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        width : width * 0.15,
        height: height * 0.04,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: AppColors.background,
      },
      buttonClose: {
        backgroundColor: AppColors.UIbutton,
      },
      textStyle: {
        color: AppColors.background,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        color:AppColors.text ,
        marginBottom: 15,
        textAlign: 'center',
      },
});

export default FilterModal;
