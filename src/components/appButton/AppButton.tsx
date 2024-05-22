import { Pressable, Text } from "react-native";
import { styles } from "./AppButtonStyle";
import React from "react";

interface AppButtonProps {
  text: string;
  onPress?: () => void; 
  disabled?: boolean;
  navigation?: any; 
  route?: string; 
  isDarkTheme: boolean;
}

export default function AppButton({ text, route, navigation, onPress, isDarkTheme }: AppButtonProps) {
  const changeRoute = () => {
    navigation.navigate(route);
  };
  
  return (
    <Pressable onPress={onPress || changeRoute} style={[styles.container, isDarkTheme ? styles.darkButton : styles.lightButton]}>
      <Text style={[styles.text, isDarkTheme ? styles.darkButton : styles.lightButton]}>{text}</Text>
    </Pressable>
  );
}
