import React from "react";
import AppColors from "../design-system/colors";
import RideCard from "../components/rideCard";
import PersonalDetailsCard from "../components/personalDetailsCard";
import personalInfo from '../data/riderData.json';
import { View, ScrollView, StyleSheet, Image, Button, TouchableOpacity, SafeAreaView, Text } from 'react-native';


const Dashboard=()=>{
    interface CardData {
        startingLocation: string;
        destination: string;
        date: Date;
        time: Date;
        cost: number;
        hostProfilePic: string;
        hostName: string;
    };

      interface PersonalData{

        name: string;
        email: string;
        contactNumber: string;
        gender:string;
        yob:number;
    };
    
    const Dashboard=()=>{
        const jsonData: PersonalData[] = personalInfo as unknown as PersonalData[];
        const jsonData2: CardData[] = data as unknown as CardData[];

        return(
            
            <>
                <TouchableOpacity style={styles.backbutton}>
                    <Image source={require('../assets/alc.png')} style={{ width: 42, height: 42 }} />
                </TouchableOpacity>

                <View style={styles.backbutton}>
                    <ScrollView>
                        <Text style={styles.dashboard}>
                            Dashboard
                        </Text>
                        {jsonData.map((cardData, index) => (
                            <PersonalDetailsCard key={index} personalInfo={cardData} />
                        ))}

                        <Text style={styles.text}>
                            Upcoming Trips
                        </Text>
                        {jsonData2.map((cardData, index) => (
                            <RideCard key={index} data={cardData} />
                        ))}
                        <Text>
                            Past Trips
                        </Text>
                        {jsonData2.map((cardData, index) => (
                            <RideCard key={index} data={cardData} />
                        ))}
                    </ScrollView>
                    


                </View>
            </>
            
        );
    };
      
      
      
}

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        padding: 10
    },
    backbutton: {
        alignSelf: 'flex-start',
        padding: 25,
        paddingTop: 40,
        paddingLeft: 24,
      },

      dashboard:{
        fontSize: 32,
        fontWeight: "bold",
        color: AppColors.text,
        margin: 10
      },

      text:{

        fontSize: 24,
        fontWeight: "bold",
        color: AppColors.text,
        margin: 8
      }


  });

export default Dashboard;
