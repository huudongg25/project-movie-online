import baseAxios from "../configs/axios.config";
import { MovieType } from "../types/movie.type";


export const getAllMovies = async (
  sort: string,
  limit: number,
  page: number,
  search: string
) => {
  try {
    const response = await baseAxios.get("/movies", {
      params: { sort, limit, page, search },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieById = async (id: number) => {
  try {
    const response = await baseAxios.get(`/movies/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createMovie = async (movieData: MovieType) => {
  try {
    const response = await baseAxios.post("/movies", movieData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMovie = async (id: number, movieData: MovieType) => {
  try {
    const response = await baseAxios.put(`/movies/${id}`, movieData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMovie = async (id: number) => {
  try {
    const response = await baseAxios.delete(`/movies/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
