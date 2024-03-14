export interface UserType {
  id?: number;
  email: string;
  password?: string;
  address?: string;
  birthDay?: string;
  depositedAmount?: number;
  status?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ResponseLogin {
  data?: UserType;
  accessToken?: string;
}
