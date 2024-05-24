import { Pressable, Text } from "react-native";
import { styles } from "./AppCardStyle";
import React from "react";

interface AppCardProps {
  text: string;
  onPress?: () => void; 
  disabled?: boolean;
  navigation?: any; 
  route?: string; 
  isDarkTheme: boolean;
}

export default function AppCard({ text, route, navigation, onPress, isDarkTheme }: AppCardProps) {
  const changeRoute = () => {
    navigation.navigate(route);
  };
  
  return (
    <Pressable onPress={onPress || changeRoute} style={[styles.container, isDarkTheme ? styles.darkButton : styles.lightButton]}>
      <Text style={[styles.text, isDarkTheme ? styles.darkButton : styles.lightButton]}>{text}</Text>
    </Pressable>
  );
}
