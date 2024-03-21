export interface FavoriteType {
  id?: number;
  userId?: number;
  movieId?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface FavoriteResponse {
  status?: number;
  success?: boolean;
  data?: FavoriteType;
  message?: string;
}
