import { TextInput } from "react-native";
import { styles } from "./AppTextFormStyle";
import React from "react";

interface AppTextFormProps {
  value?: string;
  placeholder?: string;
  editable?: boolean;
  onChangeText?: (text: string) => void;
  isDarkTheme: boolean;
  keyboardType?: "default" | "decimal-pad";
  returnKeyType?: "done"
  maxLength?: number;
}

export default function AppTextForm({
  placeholder,
  value,
  editable = true,
  onChangeText,
  isDarkTheme,
  keyboardType = "default",
  returnKeyType,
  maxLength
}: AppTextFormProps) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      editable={editable}
      placeholderTextColor="gray"
      style={[styles.input, isDarkTheme ? styles.darkInput : styles.lightInput]}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      maxLength={maxLength}
    />
  );
}
