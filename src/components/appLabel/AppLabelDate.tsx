import { styles } from './AppLabelStyle';
import React, { useState } from 'react';
import MaskInput, { Masks } from 'react-native-mask-input';

interface AppTitleProps {
  isDarkTheme: boolean;
  value: string;
  onChangeText: (text: string) => void;
}

export default function AppLabel({ isDarkTheme }: AppTitleProps) {
  const [dataNascimento, setDataNascimento] = useState('');

  return (
    <MaskInput 
      value={dataNascimento} 
      onChangeText={setDataNascimento} 
      mask={Masks.DATE_DDMMYYYY} 
      style={[styles.label, isDarkTheme ? styles.darkLabel : styles.lightLabel]}
    />
  );
}