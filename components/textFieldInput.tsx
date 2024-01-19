import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AppColors from "../design-system/colors";

// Props interface for TextFieldInput component
interface TextFieldInputProps {
  placeholder: string;
  icon: string;
}

// TextFieldInput component
const TextFieldInput: React.FC<TextFieldInputProps> = (props) => {
  // State and function to handle text changes
  const handleChangeText = (inputText: string) => {
    // Update the text state when input changes
    setText(inputText);
  };
  const [text, setText] = useState(""); // State to manage input text
  const { sectionStyle, textStyle, iconStyle } = styles;
  const { placeholder, icon } = props; // Destructure props for cleaner usage

  return (
    <View style={sectionStyle}>
      <FontAwesome name={icon as any} size={15} color="#6B3EA0" style={iconStyle} />
      <TextInput
        style={textStyle}
        placeholder={placeholder}
        value={text}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

// Styles for the component
//Needs to be fixed
const styles = StyleSheet.create({
  // Styles
  sectionStyle: {
    backgroundColor: AppColors.primary,
    justifyContent: "flex-start",
    flexDirection: "row",
    width: 309,
    height: 41,
    borderRadius: 13,
    marginTop: 15,
    padding: 12,
  },
  // Icon style
  iconStyle: {
    marginRight: 10,
  },
  // TextInput style
  textStyle: {
    fontSize: 15,
    color: AppColors.accent,
    fontFamily: "Roboto",
    fontWeight: "normal",
  },
});

export default TextFieldInput;

