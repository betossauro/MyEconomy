import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const axiosWithToken = axios.create();

axiosWithToken.interceptors.request.use(
    async config => {
      const token = await AsyncStorage.getItem('token')
        if (token) {
            config.headers.Authorization = "Bearer " + token;
            config.headers['Cache-Control'] = 'no-cache';
        }
        return config;
    },
    error => Promise.reject(error)
);

export default axiosWithToken;