import { Text } from 'react-native';
import { styles } from './AppTitleStyle';
import React from 'react';

interface AppTitleProps {
  text: string;
  isDarkTheme: boolean;
}

export default function AppTitle({ text, isDarkTheme }: AppTitleProps) {
  return (
    <Text style={[styles.title, isDarkTheme ? styles.darkTitle : styles.lightTitle]}>
      {text}
    </Text>
  );
}