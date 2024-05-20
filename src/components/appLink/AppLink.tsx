import { Text, GestureResponderEvent } from "react-native";
import { styles } from "./AppLinkStyle";
import React from "react";

interface AppLinkProps {
  text: string;
  route: string;
  navigation: any;
  onPress?: (event: GestureResponderEvent) => void; 
}

export default function AppLink({ text, route, navigation, onPress }: AppLinkProps) {
  const changeRoute = () => {
    navigation.navigate(route);
  };

  return (
    <Text onPress={onPress || changeRoute} style={styles.link}>
      {text}
    </Text>
  );
}
