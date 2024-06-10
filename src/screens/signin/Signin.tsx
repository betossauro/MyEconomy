import { Alert, View, useColorScheme } from "react-native";
import { styles } from "./SigninStyle";

import AppLink from "../../components/appLink/AppLink";
import AppTextForm from "../../components/appTextForm/AppTextForm";
import AppTitle from "../../components/appTitle/AppTitle";
import Colors from "../../constant/Colors";

import React, { useEffect, useState } from "react";
import AppButton from "../../components/appButton/AppButton";
import AppTextFormPassword from "../../components/appTextForm/AppTextFormPassword";
import AppLabel from "../../components/appLabel/AppLabel";
import { autenticar } from "../../services/UserService";

export default function Signin({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const theme = useColorScheme();
  const [disabled, setDisabled] = useState(true);
  const isDarkTheme = theme === 'dark';

  const handleSignin = async () => {
    try {
      await autenticar(email, senha);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erro', 'E-mail ou senha inválidos');
    }
  };

  useEffect(() => {
    if(email != "" && senha != ""){
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, senha]);

  return (
    <View style={[styles.container, isDarkTheme
      ? { backgroundColor: Colors.bgDark }
      : { backgroundColor: Colors.bgLight }]}>
      <View>
        <AppTitle text="My Economy" isDarkTheme={isDarkTheme} />
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
          value={senha} onChangeText={setSenha} placeholder="Digite sua senha" isDarkTheme={isDarkTheme}
        />
        <AppLink navigation={navigation} route="Signup" text="Não possui conta? Crie agora." isDarkTheme={isDarkTheme} />
        <AppButton text="Entrar" disabled={disabled} isDarkTheme={isDarkTheme} onPress={handleSignin}/>
      </View>
    </View>
  );
}
