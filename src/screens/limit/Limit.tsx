import React, { useState } from "react";
import { View, useColorScheme } from "react-native";
import AppHeader from "../../components/appHeader/AppHeader";
import avatar from '../../../assets/avatar.png';
import Colors from "../../constant/Colors";
import { Card } from 'react-native-paper';
import AppCard from "../../components/appCard/AppCard";
import { styles } from "./LimitStyle";
import AppButton from "../../components/appButton/AppButton";
import AppMonthSelector from "../../components/appMonthSelector/AppMonthSelector";
import AppLabel from "../../components/appLabel/AppLabel";
import AppTextForm from "../../components/appTextForm/AppTextForm";

export default function Expense({ navigation }) {
  const [valor, setValor] = useState("");

  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <View style={[styles.container, isDarkTheme
      ? { backgroundColor: Colors.bgDark }
      : { backgroundColor: Colors.bgLight }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 60 }}>
        <AppHeader nome="Limite" isDarkTheme={isDarkTheme} avatar={avatar} navigation={navigation}/>
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Valor" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <View style={styles.buttons}>
        <AppTextForm
          value={valor} onChangeText={setValor} placeholder="Digite o valor" isDarkTheme={isDarkTheme}/>
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Mês" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <AppMonthSelector></AppMonthSelector>
      <View style={[styles.buttons, styles.margin]}>
        <AppButton text="Registrar" navigation={navigation} route="Signin" isDarkTheme={isDarkTheme} ></AppButton>
        <AppButton text="Consultar" navigation={navigation} route="Signin" isDarkTheme={isDarkTheme} ></AppButton>
      </View>
    </View>
  );
}
  