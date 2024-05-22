import { Text } from 'react-native';
import { styles } from './AppSubtitleStyle';
import React from 'react';

interface AppTitleProps {
  text: string;
  isDarkTheme: boolean;
}

export default function AppSubtitle({ text, isDarkTheme }: AppTitleProps) {
  return (
    <Text style={[styles.title, isDarkTheme ? styles.darkTitle : styles.lightTitle]}>
      {text}
    </Text>
  );
}