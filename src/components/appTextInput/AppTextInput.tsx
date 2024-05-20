import { TextInput } from "react-native";
import { styles } from "./AppTextInputStyle";
import React from "react";

interface AppTextInputProps {
  value?: string;
  placeholder?: string;
  editable?: boolean;
}

export default function AppTextInput({
  placeholder,
  value,
  editable = true,
}: AppTextInputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      editable={editable}
      placeholderTextColor="#0072BB"
      style={styles.input}
    />
  );
}
