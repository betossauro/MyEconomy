import React, { useState, useEffect } from "react";
import { View, useColorScheme } from "react-native";
import { styles } from "./HomeStyle";
import avatar from '../../../assets/avatar.png';
import Colors from "../../constant/Colors";
import AppCard from "../../components/appCard/AppCard";
import AppHeaderHome from "../../components/appHeaderHome/AppHeaderHome";
import { useTheme } from '../../ThemeContext';
import AppTextFormDate from "../../components/appTextForm/AppTextFormDate";
import AppProgressBar from "../../components/appProgressBar/AppProgressBar";

export default function Home({ navigation }) {
  const { isDarkTheme } = useTheme();
  const [date, setDate] = useState(new Date());
  const [limite, setLimite] = useState(0);
  const [despesa, setDespesa] = useState(0);

  useEffect(() => {
    fetch('/limite-mes')
      .then(response => response.json())
      .then(data => {
        setLimite(data.limite);
      })
      .catch(error => console.error(error));

    fetch('/despesa')
      .then(response => response.json())
      .then(data => {
        setDespesa(data.despesa);
      })
      .catch(error => console.error(error));
  }, []);

  let progressLevel = limite !== 0 ? (despesa / limite) * 100 : 0;
  
  return (
    <View style={[styles.container, isDarkTheme
      ? { backgroundColor: Colors.bgDark }
      : { backgroundColor: Colors.bgLight }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 60 }}>
        <AppHeaderHome nome="Beto" isDarkTheme={isDarkTheme} avatar={avatar} navigation={navigation}/>
      </View>
      <View style={styles.buttons}>
        <AppTextFormDate
          value={date} onChange={setDate} isDarkTheme={isDarkTheme} format='monthYear'/>
      </View>
      <AppCard progressLevel={progressLevel}/>
      <AppProgressBar progressLevel={progressLevel/100}></AppProgressBar>
    </View>
  );
}
  