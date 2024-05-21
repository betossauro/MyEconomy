import { Text, GestureResponderEvent } from "react-native";
import { styles } from "./AppLinkStyle";
import React from "react";

interface AppLinkProps {
  text: string;
  route: string;
  navigation: any;
  onPress?: (event: GestureResponderEvent) => void; 
  isDarkTheme: boolean;
}

export default function AppLink({ text, route, navigation, onPress, isDarkTheme }: AppLinkProps) {
  const changeRoute = () => {
    navigation.navigate(route);
  };

  return (
    <Text onPress={onPress || changeRoute} style={[styles.link, isDarkTheme ? styles.darkLink : styles.lightLink]}>
      {text}
    </Text>
  );
}
