import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = 'http://192.168.0.102:3000';

// faz req para retornar as tarefas do banco. Retorna array com objetos
export const autenticar = async (email: string, senha: string) => {
  await axios.post(`${API_URL}/signin`, {
    email,
    senha
  })
  .then(function (response) {
    const { token, nomeUsuario } = response.data;
    AsyncStorage.setItem('token', token);
    AsyncStorage.setItem('usuario', nomeUsuario);
  })
  .catch(function (error) {
    console.log(error);
  });
};