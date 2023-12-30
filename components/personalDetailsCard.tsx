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
                <Text style={styles.fieldTitle}>
                    Name
                </Text>
                <Text style={styles.fieldTitle}>
                    Email-ID
                </Text>
                <Text style={styles.fieldTitle}>
                    Contact Number
                </Text>
                <View style={styles.genderAgeRow}>
                    <Text style={styles.fieldTitle}>
                        Gender
                    </Text>
                    <Text style={styles.fieldTitle}>
                        Age
                    </Text>
                </View>
            </View>
            
        </View>
    );
};

const styles=StyleSheet.create({

    card:{
        flexDirection: "column",
        
    },

    cardTitle:{
        fontSize: 24,
        color:AppColors.text,
        fontWeight: "bold"
    },

    fieldTitle:{
        fontSize: 18,
        color:AppColors.text,
        fontWeight: "bold"

    },

    genderAgeRow:{
        flexDirection: "column"
    }
})