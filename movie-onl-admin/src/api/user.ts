import baseAxios from "../configs/axios.config";
import { UserType } from "../types/user.type";

const BASE_URL = "/api/v1";

export const getAllUser = async (
  sort: string,
  limit: number,
  page: number,
  search: string
) => {
  try {
    const response = await baseAxios.get(`${BASE_URL}/users`, {
      params: { sort, limit, page, search },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id: number) => {
  try {
    const response = await baseAxios.get(`${BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData: UserType) => {
  try {
    const response = await baseAxios.post(`${BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id: number, userData: UserType) => {
  try {
    const response = await baseAxios.patch(`${BASE_URL}/users/update-status/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
