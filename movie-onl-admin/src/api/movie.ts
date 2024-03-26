import baseAxios from "../configs/axios.config";
import { MovieType } from "../types/movie.type";

const BASE_URL = "/api/v1"; 

export const getAllMovies = async (
  sort: string,
  limit: number,
  page: number,
  search: string
) => {
  try {
    const response = await baseAxios.get(`${BASE_URL}/movies`, {
      
      params: { sort, limit, page, search },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieById = async (id: number) => {
  try {
    const response = await baseAxios.get(`${BASE_URL}/movies/details/${id}`); 
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createMovie = async (movieData: MovieType) => {
  try {
    const response = await baseAxios.post(`${BASE_URL}/movies/create`, movieData); 
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMovie = async (id: number, movieData: MovieType) => {
  try {
    const response = await baseAxios.patch(`${BASE_URL}/movies/update/${id}`, movieData); 
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMovie = async (id: number) => {
  try {
    const response = await baseAxios.delete(`${BASE_URL}/movies/remove/${id}`); 
    return response.data;
  } catch (error) {
    throw error;
  }
};
