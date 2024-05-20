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
}

export default function AppButton({ text, action }: AppButtonProps) {
  return (
    <Pressable onPress={action} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
