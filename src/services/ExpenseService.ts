import "../../global"
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosWithToken from "../utils/RequestInterceptor";

const API_URL = global.api_url;

export const getDespesasByMes = async (mes: string) => {
  const response = await axiosWithToken.get(`${API_URL}/despesa?mes=${mes}`);
  return response;
};

export const getDespesaById = async (id: number) => {
  const response = await axiosWithToken.get(`${API_URL}/despesa?id=${id}`);
  return response;
};

export const cadastrarDespesa = async (descricao: string, valor: number, mes: string) => {
  await axiosWithToken.post(`${API_URL}/despesa`, {
    descricao,
    valor,
    mes
  })
  .catch((error) => {
    throw new Error(error.response.data.message);
  });
};

export const atualizarDespesa = async (id: number, descricao: string, valor: number, mes: string) => {
  await axiosWithToken.put(`${API_URL}/despesa`, {
    id,
    descricao,
    valor,
    mes
  })
  .catch(function (error) {
    throw new Error(error.response.data.message);
  });
};

export const excluirDespesa = async (id: number) => {
  await axiosWithToken.delete(`${API_URL}/despesa?id=${id}`)
  .catch((error) => {
    throw new Error(error.response.data.message);
  });
};