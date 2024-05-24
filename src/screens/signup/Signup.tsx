import { View, Text, Button, Alert, useColorScheme } from "react-native";
import { styles } from "./SignupStyle";
import AppTitle from "../../components/appTitle/AppTitle";
import AppTextForm from "../../components/appTextForm/AppTextForm";
import AppTextFormPassword from "../../components/appTextForm/AppTextFormPassword";
import AppButton from "../../components/appButton/AppButton";
import React, { useState } from "react";
import axios from 'axios';
import Colors from "../../constant/Colors";
import AppLabel from "../../components/appLabel/AppLabel";
import AppTextFormDate from "../../components/appTextForm/AppTextFormDate";

export default function Signup({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    try {
      await axios.post('http://localhost:3000/api/signup', {
        nome,
        email,
        password,
        confirmPassword
      });
      navigation.navigate('Signin');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar o usuário');
    }
  };

  const isButtonDisabled = !nome || !email || !password || !confirmPassword;
  return (
    <View style={[styles.container, isDarkTheme
      ? { backgroundColor: Colors.bgDark }
      : { backgroundColor: Colors.bgLight }]}>
      <View>
        <AppTitle text="Cadastro" isDarkTheme={isDarkTheme} />
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Nome" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <View style={styles.buttons}>
        <AppTextForm
          value={nome} onChangeText={setNome} placeholder="Digite seu nome" isDarkTheme={isDarkTheme}/>
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Email" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <View style={styles.buttons}>
        <AppTextForm
          value={email} onChangeText={setEmail} placeholder="nome@email.com" isDarkTheme={isDarkTheme}/>
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Data de nascimento" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <View style={styles.buttons}>
        <AppTextFormDate
          value={dataNascimento} onChangeText={setDataNascimento} placeholder="dd/mm/aaaa" isDarkTheme={isDarkTheme}/>
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Senha" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <View style={styles.buttons}>
        <AppTextFormPassword
          value={password} onChangeText={setPassword} placeholder="Digite sua senha" isDarkTheme={isDarkTheme}/>
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Confirme Senha" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <View style={styles.buttons}>
        <AppTextFormPassword
          value={confirmPassword} onChangeText={setConfirmPassword} placeholder="Confirme sua senha" isDarkTheme={isDarkTheme}/>
      </View>
      <View style={styles.buttons}>
        <AppButton text="Cadastrar" onPress={handleSignup} navigation={navigation} route="Signin" disabled={isButtonDisabled} isDarkTheme={isDarkTheme} ></AppButton>
      </View>
    </View>
  );
}
