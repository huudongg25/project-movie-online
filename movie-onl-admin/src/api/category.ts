import baseAxios from "../configs/axios.config";
import { CategoryType } from "../types/category.type";

const BASE_URL = "/api/v1/categories";

export const createCategory = async (categoryData: CategoryType) => {
  try {
    const response = await baseAxios.post(`${BASE_URL}/create`, categoryData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllCategories = async (
  sort: string,
  limit: number,
  offset: number,
  search: string
) => {
  try {
    const response = await baseAxios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (id: number, categoryData: CategoryType) => {
  try {
    const response = await baseAxios.put(`${BASE_URL}/update/${id}`, categoryData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCategory = async (id: number) => {
  try {
    const response = await baseAxios.delete(`${BASE_URL}/remove/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
