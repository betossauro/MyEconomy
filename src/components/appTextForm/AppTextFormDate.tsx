import { styles } from "./AppTextFormStyle";
import React, { useState } from 'react';
import MaskInput, { Masks } from 'react-native-mask-input';

interface AppTextFormProps {
  isDarkTheme: boolean;
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  mask?: typeof Masks;
}

export default function AppTextFormDate({
  placeholder,
  value,
  onChangeText,
  isDarkTheme,
}: AppTextFormProps) {
  return (
    <MaskInput
      placeholder={placeholder}
      value={value}
      placeholderTextColor="gray"
      style={[styles.input, isDarkTheme ? styles.darkInput : styles.lightInput]}
      onChangeText={onChangeText}
      mask={Masks.DATE_DDMMYYYY}
    />
  );
}