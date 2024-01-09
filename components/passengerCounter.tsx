import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet,Text,View,Button } from "react-native";
import { Pressable } from "react-native";

export default class PassengerCounter extends React.Component {
  state = {
    value:0,
  }
  //increment value function
  incrementValue = () => {
    this.setState({
      value: this.state.value+1,
    })
  }
  //decrement value function
  decrementValue = () => {
    this.setState({
      value: this.state.value-1,
    })
  }

  render () {

  const { container,textStyle,counterTextStyle,buttonStyle} = styles;
  return (
    <View style = {styles.container}>
      
      

      <StatusBar style="auto"/>
      
      <View style={{flexDirection: 'row', padding:20}}>
        <Text style = {textStyle}>Number of People</Text>
        <Pressable style={buttonStyle} onPress={this.decrementValue}>
      <Text style={counterTextStyle}>   -  </Text>
    </Pressable>
      
      <Text style ={textStyle}> {this.state.value} </Text>
      <Pressable style={buttonStyle} onPress={this.incrementValue}>
      <Text style={counterTextStyle}>  +  </Text>
    </Pressable>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
container: {
  backgroundColor:'#fff',
},
textStyle: {
    fontSize: 20,
    color: "#6B3EA0",
    fontFamily: "Roboto",
    fontWeight: "normal",
  },
counterTextStyle: {
    fontSize: 25,
    color: "#6B3EA0",
    justifyContent: 'center' ,
    fontFamily: "Roboto",
    fontWeight: "normal",
},

buttonStyle: {
    opacity: 1,
    justifyContent: 'space-around' ,
    
}

});