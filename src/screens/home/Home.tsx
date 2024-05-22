import React, { useState } from "react";
import { View, useColorScheme } from "react-native";
import { styles } from "./HomeStyle";
import AppHeader from "../../components/appHeader/AppHeader";
import avatar from '../../../assets/avatar.png';

export default function Home({ navigation }) {
    const theme = useColorScheme();
    const isDarkTheme = theme === 'dark';
  
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<AppHeader nome="Beto" isDarkTheme={isDarkTheme} avatar={avatar} />
        </View>
      </View>
    );
  }
  