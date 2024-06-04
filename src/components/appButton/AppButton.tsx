import { Pressable, Text } from "react-native";
import { styles } from "./AppButtonStyle";
import React from "react";

interface AppButtonProps {
  text: string;
  onPress?: () => void; 
  disabled?: boolean;
  route?: string; 
  isDarkTheme: boolean;
}

export default function AppButton({ text, onPress, isDarkTheme }: AppButtonProps) {

  const handlePress = () => {
    onPress();
  }
  
  return (
    <Pressable onPress={handlePress} style={[styles.container, isDarkTheme ? styles.darkButton : styles.lightButton]}>
      <Text style={[styles.text, isDarkTheme ? styles.darkButton : styles.lightButton]}>{text}</Text>
    </Pressable>
  );
}
