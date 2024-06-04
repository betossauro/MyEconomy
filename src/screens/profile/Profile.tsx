import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AppHeader from "../../components/appHeader/AppHeader";
import Colors from "../../constant/Colors";
import { styles } from "./ProfileStyle";
import AppButton from "../../components/appButton/AppButton";
import AppLabel from "../../components/appLabel/AppLabel";
import { useTheme } from '../../ThemeContext';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile({ navigation }) {
  const { isDarkTheme } = useTheme();
  const [ nome, setNome ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ dataNascimento, setDataNascimento ] = useState("");

  useEffect(() => {
    const fetchUsuario = async () => {
      setNome(await AsyncStorage.getItem('nome'));
      setEmail(await AsyncStorage.getItem('email'));
      var dt = await AsyncStorage.getItem('dataNascimento').then((dt) => new Date(dt));
      setDataNascimento(`${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`);
    };

    fetchUsuario();
  }, []);

  const handlePressSair = () => {
    navigation.navigate('Signin');
  };
  
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
          <AppLabel text={nome} isDarkTheme={isDarkTheme}></AppLabel>
        </View>
        <View style={styles.labelContainer}>
          <AppLabel text="Email" isDarkTheme={isDarkTheme}></AppLabel>
        </View>
        <View style={styles.labelContainer}>
          <AppLabel text={email} isDarkTheme={isDarkTheme}></AppLabel>
        </View>
        <View style={styles.labelContainer}>
          <AppLabel text="Data de nascimento" isDarkTheme={isDarkTheme}></AppLabel>
        </View>
        <View style={styles.labelContainer}>
          <AppLabel text={dataNascimento} isDarkTheme={isDarkTheme}></AppLabel>
        </View>
        <View style={[styles.buttons, styles.margin]}>
          <AppButton text="Sair" isDarkTheme={isDarkTheme} onPress={handlePressSair}></AppButton>
        </View>
      </View>
    );
  }
  