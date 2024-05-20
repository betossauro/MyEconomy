import { View, Text, Button, Alert } from "react-native";
import { styles } from "./SignupStyle";
import AppTitle from "../../components/appTitle/AppTitle";
import AppTextForm from "../../components/appTextForm/AppTextForm";
import AppTextFormPassword from "../../components/appTextForm/AppTextFormPassword";
import AppButton from "../../components/appButton/AppButton";
import React, { useState } from "react";
import axios from 'axios';

export default function Signup({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

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
    <View style={styles.container}>
      <View>
        <AppTitle text="sign up" />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Nome</Text>
      </View>
      <View style={styles.buttons}>
        <AppTextForm
          value={nome} onChangeText={setNome} placeholder="Digite seu nome" 
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Email</Text>
      </View>
      <View style={styles.buttons}>
        <AppTextForm
          value={email} onChangeText={setEmail} placeholder="nome@email.com"
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Data de nascimento</Text>
      </View>
      <View style={styles.buttons}>
        <AppTextForm
          value={dataNascimento} onChangeText={setDataNascimento} placeholder="dd/mm/aaaa"
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Senha</Text>
      </View>
      <View style={styles.buttons}>
        <AppTextFormPassword
          value={password} onChangeText={setPassword} placeholder="Digite sua senha"
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Confirme Senha</Text>
      </View>
      <View style={styles.buttons}>
        <AppTextFormPassword
          value={confirmPassword} onChangeText={setConfirmPassword} placeholder="Confirme sua senha"
        />
      </View>
        <AppButton text="Registrar" onPress={handleSignup} navigation={navigation} route="Signin" disabled={isButtonDisabled} ></AppButton>
      <View style={styles.buttons}>
      </View>
    </View>
  );
}
