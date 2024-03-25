import baseAxios from "../configs/axios.config";

const BASE_URL = "/api/v1/admins"; 

export const createAdmin = async (adminData:any) => {
  try {
    const response = await baseAxios.post(`${BASE_URL}/create`, adminData); 
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginAdmin = async (adminData:any) => {
  try {
    const response = await baseAxios.post(`${BASE_URL}/login`, adminData); 
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutAdmin = async () => {
  try {
    const response = await baseAxios.post(`${BASE_URL}/logout`); 
    return response.data;
  } catch (error) {
    throw error;
  }
};
