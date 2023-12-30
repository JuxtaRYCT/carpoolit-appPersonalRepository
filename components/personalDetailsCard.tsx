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
                <View>
                    <Text style={styles.fieldTitle}>
                        Email-ID
                    </Text>
                    <Text style={styles.fieldInfo}>
                        {personalInfo.email}
                    </Text>
                </View>
                <View>
                    <Text style={styles.fieldTitle}>
                        Contact Number
                    </Text>
                    <Text style={styles.fieldInfo}>
                        {personalInfo.contactNumber}
                    </Text>
                </View>
                
                <View style={styles.genderAgeRow}>
                    <View>
                        <Text style={styles.fieldTitle}>
                            Gender
                        </Text>
                        <Text style={styles.fieldInfo}>
                            {personalInfo.gender}
                        </Text>
                    </View>
                    
                    <View>
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
        
    },

    cardTitle:{
        fontSize: 24,
        color:AppColors.text,
        fontWeight: "bold",
        fontFamily: 'Roboto'

    },

    fieldTitle:{
        fontSize: 18,
        color:AppColors.text,
        fontWeight: "bold",
        fontFamily: 'Roboto'

    },

    fieldInfo:{
        fontSize: 15,
        color:AppColors.accent,
        backgroundColor: AppColors.primary,
        borderRadius:10,        
        width: '80%',
        padding:5,
        fontFamily: 'Roboto'

    },

    genderAgeRow:{
        flexDirection: "row"
    }
})