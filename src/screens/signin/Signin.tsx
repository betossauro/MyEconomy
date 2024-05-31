import { View, Text, useColorScheme , Alert } from "react-native";
import { styles } from "./SigninStyle";

import AppTitle from "../../components/appTitle/AppTitle";
import AppTextForm from "../../components/appTextForm/AppTextForm";
import AppLink from "../../components/appLink/AppLink";
import Colors from "../../constant/Colors";

import React, { useState } from "react";
import AppTextFormPassword from "../../components/appTextForm/AppTextFormPassword";
import AppButton from "../../components/appButton/AppButton";
// import { setLocalStorageItem } from "../../utils/localStorage";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLabel from "../../components/appLabel/AppLabel";
import { autenticar } from "../../services/usuario/UsuarioService";

export default function Signin({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  const handleSignin = async (email: string, senha: string) => {
    await autenticar({email, senha}).then((res) => {
      navigation.navigate('Home');
    }).catch(() => {
      Alert.alert('Erro', 'E-mail ou senha incorretos');
    })
  };

  const isButtonDisabled = email != "" || senha != "";

  return (
    <View style={[styles.container, isDarkTheme
      ? { backgroundColor: Colors.bgDark }
      : { backgroundColor: Colors.bgLight }]}>
      <View>
        <AppTitle text="My Economy" isDarkTheme={isDarkTheme}/>
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Email" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <View style={styles.buttons}>
        <AppTextForm
          value={email} onChangeText={setEmail} placeholder="nome@email.com" isDarkTheme={isDarkTheme}
        />
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Senha" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <View style={styles.buttons}>
        <AppTextFormPassword
          value={senha}  onChangeText={setSenha} placeholder="Digite sua senha" isDarkTheme={isDarkTheme}
        />
        <AppLink navigation={navigation} route="Signup" text="Não possui conta? Crie agora." isDarkTheme={isDarkTheme}/>
        <AppButton
          text="Entrar"
          navigation={navigation}
          route="Home"
          onPress={() => handleSignin(email, senha)}
          disabled={isButtonDisabled}
          isDarkTheme={isDarkTheme}
        />
      </View>
    </View>
  );
}
