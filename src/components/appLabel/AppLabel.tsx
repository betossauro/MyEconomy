import { Text } from 'react-native';
import { styles } from './AppLabelStyle';
import React from 'react';

interface AppTitleProps {
  text: string;
  isDarkTheme: boolean;
}

export default function AppLabel({ text, isDarkTheme }: AppTitleProps) {
  return (
    <Text style={[styles.label, isDarkTheme ? styles.darkLabel : styles.lightLabel]}>
      {text}
    </Text>
  );
}