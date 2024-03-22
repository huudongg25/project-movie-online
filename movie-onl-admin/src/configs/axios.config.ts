import axios, { AxiosInstance } from "axios";
import { error } from "console";

const baseAxios: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
});

baseAxios.interceptors.request.use(
  async (config) => {
    let token;
    token = localStorage.getItem("token");
    if (token !== null) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
baseAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
baseAxios.defaults.withCredentials = true;
export default baseAxios;
