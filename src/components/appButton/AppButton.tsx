import { Pressable, Text } from "react-native";
import { styles } from "./AppButtonStyle";
import React from "react";

interface AppButtonProps {
  text: string;
  action?: () => void;
  onPress?: () => void; 
  disabled: boolean;
  navigation?: any; 
  route?: string; 
  isDarkTheme: boolean;
}

export default function AppButton({ text, action, isDarkTheme }: AppButtonProps) {
  return (
    <Pressable onPress={action} style={[styles.container, isDarkTheme ? styles.darkButton : styles.lightButton]}>
      <Text style={[styles.text, isDarkTheme ? styles.darkButton : styles.lightButton]}>{text}</Text>
    </Pressable>
  );
}
