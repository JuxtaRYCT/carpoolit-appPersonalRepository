import React from "react";
import{View, Text, StyleSheet} from 'react-native';
import AppColors from "../design-system/colors";

interface PersonalDetails{

    personalInfo: {
        name: string;
        email: string;
        contactNumber: string;
        gender:string;
        yob:number;
      };

}

const PersonalDetailsCard: React.FC<PersonalDetails>=({personalInfo})=>{
    return(
        <View style={styles.card}>
            
            <View>
                <Text style={styles.cardTitle}>
                    Personal Details
                </Text>
            </View>

            <View>
                <View>
                    <Text style={styles.fieldTitle}>
                        Name
                    </Text>
                    <Text style={styles.fieldInfo}>
                        {personalInfo.name}
                        
                    </Text>
                </View>
                
                    <Text style={styles.fieldTitle}>
                        Email-ID
                    </Text>
                    
                    <Text style={styles.fieldInfo}>
                        {personalInfo.email}
                        
                    </Text>
                    
                <View style={styles.fieldAlign}>
                    <Text style={styles.fieldTitle}>
                        Contact Number
                    </Text>
                    <View>
                        <Text style={styles.fieldInfo}>
                            {personalInfo.contactNumber}
                        </Text>
                    </View>
                    
                </View>
                
                <View style={styles.genderAgeRow}>
                    <View style={styles.rowElementAlign}>
                        <Text style={styles.fieldTitle}>
                            Gender
                        </Text>
                        <Text style={styles.fieldInfo}>
                            {personalInfo.gender}
                            
                        </Text>
                    </View>
                    
                    <View style={styles.rowElementAlign}>
                        <Text style={styles.fieldTitle}>
                            Age
                        </Text>
                        
                        <Text style={styles.fieldInfo}>
                            {personalInfo.yob}
                        </Text>
                        
                        
                    </View>
                    
                </View>
            </View>
            
        </View>
    );
};

const styles=StyleSheet.create({

    card:{
        flexDirection: "column",
        borderRadius: 12,
        width: '95%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6, 
        elevation: 5, 
        backgroundColor: AppColors.background,
        padding: 10,
        marginTop:10,
        marginBottom: 20,
        marginLeft:10
        
    },

    cardTitle:{
        fontSize: 24,
        color:AppColors.text,
        fontWeight: "bold",
        margin: 10
    },

    fieldTitle:{
        fontSize: 17,
        color:AppColors.text,
        fontWeight: "bold",
        marginLeft:8
        
    },

    fieldInfo:{
        fontSize: 15,
        color:AppColors.accent,
        backgroundColor: AppColors.primary,        
        padding:12,
        margin:8,
        borderRadius: 10
        
    },

    fieldAlign:{
        justifyContent:'flex-start'
    },
    
    
    genderAgeRow:{
        flexDirection: "row",
        
    },

    rowElementAlign:{
        flex:1
    }
});

export default PersonalDetailsCard;

/*
This is the App.tsx code for running the card component on the screen, it fetches the data from ridersData.json file.

import React from 'react';
import { View, StyleSheet } from 'react-native';
import PersonalDetailsCard from './components/personalDetailsCard'
import personalInfo from './riderData.json'



interface PersonalData{

      name: string;
      email: string;
      contactNumber: string;
      gender:string;
      yob:number;
  }

const App: React.FC = () => {
  const jsonData: PersonalData[] = personalInfo as unknown as PersonalData[];

  return (
    <View style={styles.container}>
      {jsonData.map((cardData, index) => (
        <PersonalDetailsCard key={index} personalInfo={cardData} />
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