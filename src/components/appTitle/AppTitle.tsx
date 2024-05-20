import { Text } from "react-native";
import { styles } from "./AppTitleStyle";
import React from "react";

interface AppTitleProps {
  text: string;
}

export default function AppTitle({ text }: AppTitleProps) {
  return <Text style={styles.title}>{text}</Text>;
}
