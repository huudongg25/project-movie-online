export interface HistoryMovieType {
  id?: number;
  userId?: number;
  movieId?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface HistoryMovieResponse {
  status?: number;
  data?: HistoryMovieType;
  message?: string;
  success?: boolean;
}
