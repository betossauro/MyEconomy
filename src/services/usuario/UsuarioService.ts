import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = 'http://192.168.0.102:3000/api';

export const autenticar = async (email: string, senha: string) => {
  await axios.post(`${API_URL}/signin`, {
    email,
    senha
  })
  .then(function (response) {
    const { token, usuario } = response.data;
    AsyncStorage.setItem('token', token);
    AsyncStorage.setItem('usuarioId', usuario.id);
  })
  .catch(function (error) {
    throw new Error(error);
  });
};

export const buscar = async () => {
  const id = AsyncStorage.getItem('usuarioId');
  console.log(AsyncStorage.getItem('usuarioId'))
  return await axios.get(`${API_URL}/buscar?id=${id}`)
  .then((response) => {
    console.log(response)
    return response
  })
}

export const cadastrar = async (nome: string, dataNascimento: Date, email: string, senha: string, confirmacaoSenha: string) => {
  await axios.post(`${API_URL}/signup`, {
    nome,
    email,
    dataNascimento,
    senha,
    confirmacaoSenha
  })
  .catch(function (error) {
    throw new Error(error);
  });
};