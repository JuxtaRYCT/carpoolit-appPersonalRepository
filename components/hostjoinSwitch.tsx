import React, { useState } from "react";
import {Text, View, TouchableOpacity } from "react-native";

// Props interface for HostJoinSwitch component
interface HostJoinSwitchProps {
  navigation: any, 
  selectionMode: number;
  roundCorner: boolean;
  option1: string;
  option2: string;
  selectionColor: string;
  hostridefunc: any;
  joinridefunc: any;
}

// HostJoinSwitch component
const HostJoinSwitch: React.FC<HostJoinSwitchProps> = (props) => {
  const {
    selectionMode,
    roundCorner,
    option1,
    option2,
    selectionColor,
    navigation,
    hostridefunc,
    joinridefunc
  } = props;

  // State variables to manage switch state
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);

  // Function to update switch data based on the selected option
  const updatedSwitchData = (val: number) => {
    setSelectionMode(val);
  };
function joinSwitchPress(): void {
  updatedSwitchData(1);
            hostridefunc();
            updatedSwitchData(2); // to make sure that when it pops the switch stays on join
            
}

function hostSwitchPress(): void {
  updatedSwitchData(2);
          joinridefunc();
          //an extra is not needed here because it is beaing popped and going back to joinride  
}
  return (
    <View>
      <View
        style={{
          height: 44,
          width: 215,
          backgroundColor: "white",
          borderRadius: getRoundCorner ? 25 : 0,
          borderWidth: 1,
          borderColor: selectionColor,
          flexDirection: "row",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={joinSwitchPress}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 1 ? selectionColor : "white",
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: getSelectionMode == 1 ? "white" : selectionColor,
            }}
          >
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={hostSwitchPress}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 2 ? selectionColor : "white",
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: getSelectionMode == 2 ? "white" : selectionColor,
            }}
          >
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HostJoinSwitch;

