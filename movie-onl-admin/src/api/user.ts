import baseAxios from "../configs/axios.config";
import { UserType } from "../types/user.type";

export const getAllUser = async (
  sort: string,
  limit: number,
  page: number,
  search: string
) => {
  try {
    const response = await baseAxios.get("/users", {
      params: { sort, limit, page, search },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id: number) => {
  try {
    const response = await baseAxios.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData: UserType) => {
  try {
    const response = await baseAxios.post("/users", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id: number, userData: UserType) => {
  try {
    const response = await baseAxios.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

