import React, { useState } from "react";
import { View, useColorScheme } from "react-native";
import { styles } from "./HomeStyle";
import avatar from '../../../assets/avatar.png';
import Colors from "../../constant/Colors";
import { Card } from 'react-native-paper';
import AppCard from "../../components/appCard/AppCard";
import AppHeaderHome from "../../components/appHeaderHome/AppHeaderHome";
import AppMonthSelector from "../../components/appMonthSelector/AppMonthSelector";
import { useTheme } from '../../ThemeContext';

export default function Home({ navigation }) {
  const { isDarkTheme } = useTheme();
  
  return (
    <View style={[styles.container, isDarkTheme
      ? { backgroundColor: Colors.bgDark }
      : { backgroundColor: Colors.bgLight }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 60 }}>
        <AppHeaderHome nome="Beto" isDarkTheme={isDarkTheme} avatar={avatar} navigation={navigation}/>
      </View>
      <View>
        <AppMonthSelector isDarkTheme={isDarkTheme}></AppMonthSelector>
        {/* <AppCard></AppCard> */}
        {/* <AppProgressBar></AppProgressBar> */}
      </View>
    </View>
  );
}
  