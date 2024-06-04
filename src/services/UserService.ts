import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import "../../global";

const API_URL = global.api_url;

export const autenticar = async (email: string, senha: string) => {
  await axios.post(`${API_URL}/signin`, {
    email,
    senha
  })
  .then((response) => {
    const { token, id, nome, email, dataNascimento } = response.data;
    AsyncStorage.setItem('token', token);
    AsyncStorage.setItem('id', id);
    AsyncStorage.setItem('nome', nome);
    AsyncStorage.setItem('email', email);
    AsyncStorage.setItem('dataNascimento', dataNascimento);
  })
  .catch((error) => {
    throw new Error(error);
  });
};

export const cadastrar = async (nome: string, dataNascimento: Date, email: string, senha: string, confirmacaoSenha: string) => {
  await axios.post(`${API_URL}/signup`, {
    nome,
    email,
    dataNascimento,
    senha,
    confirmacaoSenha
  })
  .catch((error) => {
    throw new Error(error.response.data.message);
  });
};