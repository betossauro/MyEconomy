import { Pressable, View, Text } from "react-native";
import { styles } from "./AppProgressBarStyle";
import React, { useEffect, useState } from 'react';
import Colors from '../../constant/Colors';
import * as Progress from 'react-native-progress';
import AppSubtitle from "../appSubtitle/AppSubtitle";
import { useTheme } from '../../ThemeContext';
import AppLabel from "../appLabel/AppLabel";
import AppLabelNoBold from "../appLabel/AppLabelNoBold";

interface AppProgressBarProps {
  progressLevel: number;
  despesa: number;
  limite: number;
}

export default function AppProgressBar({ progressLevel, despesa, limite }: AppProgressBarProps) {
  const { isDarkTheme } = useTheme();
  let color;
  if (progressLevel >= 0.0 && progressLevel <= 0.24) {
    color = Colors.progress25;
  } else if (progressLevel >= 0.25 && progressLevel <= 0.49) {
    color = Colors.progress50;
  } else if (progressLevel >= 0.50 && progressLevel <= 0.74) {
    color = Colors.progress75;
  } else if (progressLevel >= 0.75 && progressLevel <= 0.99) {
    color = Colors.progress100;
  } else {
    color = Colors.gdProgress101;
  }

  return (
    <View style={styles.container}>
      <View >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <AppLabel text={"Gastos:"} isDarkTheme={isDarkTheme}></AppLabel>
          <AppLabelNoBold text={`R$${despesa}/R$${limite}`} isDarkTheme={isDarkTheme}></AppLabelNoBold>
        </View>
        <Progress.Bar progress={progressLevel} borderRadius={10} height={20} width={300} color={color} borderWidth={1} />
      </View>
    </View>
  );
}