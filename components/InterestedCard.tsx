import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card } from '@rneui/themed';

interface InterestedCardProps {
    name: string;
    onPress: () => void; // Function to handle button press
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        backgroundColor: '#E5D9FF',
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 8,
        width: '100%' // Set width to take full available width
    },
    name: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#49108B',
        marginLeft: 10,
        padding: 8
    },
    image: {
        width: 42,
        height: 42,
    },
    Button: {
        width: '90%' // Set the width of TouchableOpacity
    }
});

const InterestedCard: React.FC<InterestedCardProps> = (props) => {
    const { name, onPress } = props;

    return (
        /* TouchableOpacity to make the card behave like a button when pressed */
        <TouchableOpacity style={styles.Button} onPress={onPress}>
            <Card containerStyle={styles.card}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/profile.png')} style={styles.image} />
                    <Text style={styles.name}>{name}</Text>
                </View>
            </Card>
        </TouchableOpacity>
    );
}

export default InterestedCard;
