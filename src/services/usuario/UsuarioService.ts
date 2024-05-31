import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = 'http://192.168.1.10:3000';

// faz req para retornar as tarefas do banco. Retorna array com objetos
export const autenticar = async (usuario: {email: string, senha: string}) => {
  await axios.post(`${API_URL}/signin`, {
    usuario
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