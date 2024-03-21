export interface ReviewType {
  id?: number;
  userId?: number;
  movieId?: number;
  rattingPoint?: number;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ReviewResponse {
  status?: number;
  data?: ReviewType;
  message?: string;
  success?: boolean;
}
