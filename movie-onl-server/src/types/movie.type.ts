export interface MovieType {
  id?: number;
  totalViews?: number;
  name?: string;
  director?: string;
  performer?: string;
  categoryId?: number;
  manufactureYear?: string;
  describe?: string;
  video?: string;
  price?: number;
  averageRating?: number;
  datePublication?: string;
  movieDuration?: string;
  status?: number;
  createdAt?: string;
  updatedAt?: string;
  userId?: number;
  billingInformation?: string;
  isPurchased?: number;
}

export interface MovieResponse {
  status?: number;
  data?: MovieType;
  message?: string;
  success?: boolean;
}
