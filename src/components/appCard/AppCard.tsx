import { Pressable, View } from "react-native";
import { styles } from "./AppCardStyle";
import React from "react";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import Colors from '../../constant/Colors';

interface AppCardProps {
  progressLevel: number;
}

interface EmojiAndText {
  emoji: string;
  text: string;
}

function getEmojiAndText(progressLevel: number): EmojiAndText {
  if (progressLevel >= 0 && progressLevel <= 24) {
    return { emoji: "😴", text: "Progresso muito baixo" };
  } else if (progressLevel >= 25 && progressLevel <= 49) {
    return { emoji: "🤩", text: "Seu progresso está excelente, continue assim!" };
  } else if (progressLevel >= 50 && progressLevel <= 74) {
    return { emoji: "🙂", text: "Continue assim!" };
  } else if (progressLevel >= 75 && progressLevel <= 99) {
    return { emoji: "🥴", text: "Cuidado, seu limite está muito alto!" };
  } else {
    return { emoji: "😓", text: "Objetivo não atingido!" };
  }
}

export default function AppCard({ progressLevel }: AppCardProps) {
  let gradientColors;
  if (progressLevel >= 0 && progressLevel <= 24) {
    gradientColors = [Colors.gdProgress25, Colors.glProgress25];
  } else if (progressLevel >= 25 && progressLevel <= 49) {
    gradientColors = [Colors.gdProgress50, Colors.glProgress50];
  } else if (progressLevel >= 50 && progressLevel <= 74) {
    gradientColors = [Colors.gdProgress75, Colors.glProgress75];
  } else if (progressLevel >= 75 && progressLevel <= 99) {
    gradientColors = [Colors.gdProgress100, Colors.glProgress100];
  } else {
    gradientColors = [Colors.gdProgress101, Colors.glProgress101];
  }

  const { emoji, text } = getEmojiAndText(progressLevel);

  return (
    <View style={styles.container}>
      <Card style={{ width: '100%' }}>
        <LinearGradient colors={ gradientColors } style={{ borderRadius: 10 }}>
          <Card.Content>
            <Text variant="titleLarge"> </Text>
            <Text style={styles.emoji} variant="titleLarge"> {emoji} </Text>
          </Card.Content>
          <Card.Content>
            <Text variant="bodyMedium"> </Text>
            <Text style={styles.text} variant="bodyMedium"> {text} </Text>
            <Text variant="titleLarge"> </Text>
          </Card.Content>
        </LinearGradient>
      </Card>
    </View>
  );
}