import { TextInput } from "react-native";
import { styles } from "./AppTextFormStyle";
import React from "react";

interface AppTextFormProps {
  value?: string;
  placeholder?: string;
  editable?: boolean;
  onChangeText?: (text: string) => void;
}

export default function AppTextForm({
  placeholder,
  value,
  editable = true,
  onChangeText,
}: AppTextFormProps) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      editable={editable}
      placeholderTextColor="gray"
      style={styles.input}
      onChangeText={onChangeText}
    />
  );
}
