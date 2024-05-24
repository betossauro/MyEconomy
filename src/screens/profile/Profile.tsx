import React, { useState } from "react";
import { View, useColorScheme } from "react-native";
import AppHeader from "../../components/appHeader/AppHeader";
import avatar from '../../../assets/avatar.png';
import Colors from "../../constant/Colors";
import { Card } from 'react-native-paper';
import AppCard from "../../components/appCard/AppCard";
import { styles } from "./ProfileStyle";
import AppButton from "../../components/appButton/AppButton";
import AppLabel from "../../components/appLabel/AppLabel";

export default function Profile({ navigation }) {
    const theme = useColorScheme();
    const isDarkTheme = theme === 'dark';
  
    return (
      <View style={[styles.container, isDarkTheme
        ? { backgroundColor: Colors.bgDark }
        : { backgroundColor: Colors.bgLight }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 }}>
          <AppHeader nome="Meus Dados" isDarkTheme={isDarkTheme} showAvatar={false}/>
        </View>
        <View style={styles.labelContainer}>
          <AppLabel text="Nome" isDarkTheme={isDarkTheme}></AppLabel>
        </View>
        <View style={styles.labelContainer}>
          <AppLabel text="$nome" isDarkTheme={isDarkTheme}></AppLabel>
        </View>
        <View style={styles.labelContainer}>
          <AppLabel text="Email" isDarkTheme={isDarkTheme}></AppLabel>
        </View>
        <View style={styles.labelContainer}>
          <AppLabel text="$email" isDarkTheme={isDarkTheme}></AppLabel>
        </View>
        <View style={styles.labelContainer}>
          <AppLabel text="Data de nascimento" isDarkTheme={isDarkTheme}></AppLabel>
        </View>
        <View style={styles.labelContainer}>
          <AppLabel text="$datanascimento" isDarkTheme={isDarkTheme}></AppLabel>
        </View>
        <View style={[styles.buttons, styles.margin]}>
          <AppButton text="Sair" navigation={navigation} route="Signin" isDarkTheme={isDarkTheme} ></AppButton>
        </View>
      </View>
    );
  }
  