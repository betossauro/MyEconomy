import React, { useState } from "react";
import { View, useColorScheme } from "react-native";
import AppHeader from "../../components/appHeader/AppHeader";
import avatar from '../../../assets/avatar.png';
import Colors from "../../constant/Colors";
import { styles } from "./LimitStyle";
import AppButton from "../../components/appButton/AppButton";
import AppLabel from "../../components/appLabel/AppLabel";
import AppTextForm from "../../components/appTextForm/AppTextForm";
import { useTheme } from '../../ThemeContext';
import AppTextFormDate from "../../components/appTextForm/AppTextFormDate";

export default function Limit({ navigation }) {
  const [valor, setValor] = useState("");
  const [date, setDate] = useState(new Date());
  const { isDarkTheme } = useTheme();

  return (
    <View style={[styles.container, isDarkTheme
      ? { backgroundColor: Colors.bgDark }
      : { backgroundColor: Colors.bgLight }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 60 }}>
        <AppHeader nome="Limite" isDarkTheme={isDarkTheme} avatar={avatar} navigation={navigation} />
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
      <View style={styles.buttons}>
        <AppTextFormDate
          value={date} onChange={setDate} isDarkTheme={isDarkTheme}/>
      </View>
      <View style={[styles.buttons, styles.margin]}>
        <AppButton text="Registrar" isDarkTheme={isDarkTheme} ></AppButton>
        <AppButton text="Consultar" navigation={navigation} route="LimitHistory" isDarkTheme={isDarkTheme} ></AppButton>
      </View>
    </View>
  );
}
  