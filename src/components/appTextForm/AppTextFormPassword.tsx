import { TextInput } from "react-native";
import { styles } from "./AppTextFormStyle";
import React from "react";

interface AppTextFormPaswordProps {
  value?: string;
  placeholder?: string;
  editable?: boolean;
  onChangeText?: (text: string) => void;
}

export default function AppTextFormPasword({
  placeholder,
  value,
  editable = true,
  onChangeText,
}: AppTextFormPaswordProps) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      editable={editable}
      placeholderTextColor="gray"
      secureTextEntry={true}
      style={styles.input}
      onChangeText={onChangeText}
    />
  );
}
