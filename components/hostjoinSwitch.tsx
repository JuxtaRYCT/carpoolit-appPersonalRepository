import React, { useState } from "react";
import {Text, View, TouchableOpacity } from "react-native";

// Props interface for HostJoinSwitch component
interface HostJoinSwitchProps {
  // navigation: any, 
  selectionMode: number;
  roundCorner: boolean;
  option1: string;
  option2: string;
  selectionColor: string;
}

// HostJoinSwitch component
const HostJoinSwitch: React.FC<HostJoinSwitchProps> = (props) => {
  const {
    /*navigation,*/ selectionMode,
    roundCorner,
    option1,
    option2,
    selectionColor,
  } = props;

  // State variables to manage switch state
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);

  // Function to update switch data based on the selected option
  const updatedSwitchData = (val: number) => {
    setSelectionMode(val);
  };

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
          onPress={() => updatedSwitchData(1)}
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
          onPress={() => updatedSwitchData(2)}
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

