import "../../global"
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosWithToken from "../utils/RequestInterceptor";

const API_URL = global.api_url;

export const progressoMes = async (mes: string) => {
  const response = await axiosWithToken.get(`${API_URL}/progresso-mes?&mes=${mes}`);
  return response;
}

export const getAllLimite = async () => {
  const response = await axiosWithToken.get(`${API_URL}/limite-mes`);
  return response;
};

export const getLimiteById = async (id: number) => {
  const response = await axiosWithToken.get(`${API_URL}/limite-mes?id=${id}`);
  return response;
};

export const getLimiteByMes = async (mes: string) => {
  const response = await axiosWithToken.get(`${API_URL}/limite-mes?mes=${mes}`);
  return response;
};

export const cadastrarLimite = async (valor: number, mes: string) => {
  await axiosWithToken.post(`${API_URL}/limite-mes`, {
    valor,
    mes
  })
  .catch(function (error) {
    throw new Error(error.response.data.message);
  });
};

export const atualizarLimite = async (id: number, valor: number, mes: string) => {
  await axiosWithToken.put(`${API_URL}/limite-mes`, {
    id,
    valor,
    mes
  })
  .catch(function (error) {
    throw new Error(error.response.data.message);
  });
};

export const excluirLimite = async (id: number) => {
  await axiosWithToken.delete(`${API_URL}/limite-mes?id=${id}`)
  .catch((error) => {
    throw new Error(error.response.data.message);
  });
};