export interface UserType {
  id?: number;
  email?: string;
  password?: string;
  address?: string;
  birthDay?: string;
  avatar?: string;
  depositedAmount?: number;
  status?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ResponseService {
  status?: number;
  data?: any;
  message?: string;
  success?: boolean;
}
export interface ResponseLogin {
  data?: any;
  accessToken?: string;
  status?: number;
  success?: boolean;
  message?: string;
}
