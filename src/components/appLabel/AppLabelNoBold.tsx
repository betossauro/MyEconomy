import { Text } from 'react-native';
import { styles } from './AppLabelStyle';
import React from 'react';

interface AppTitleProps {
  text: string;
  isDarkTheme: boolean;
}

export default function AppLabelNoBold({ text, isDarkTheme }: AppTitleProps) {
  return (
    <Text style={[styles.labelNoBold, isDarkTheme ? styles.darkLabel : styles.lightLabel]}>
      {text}
    </Text>
  );
}