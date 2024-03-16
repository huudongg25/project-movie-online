export const BASE_PATH = "/api/v1";

export const ENDPOINT = {
  // auth endPoint
  LOGIN: `/auth/login`,
  REGISTER: `/auth/register`,
  LOGOUT: `/auth/logout`,
  // users endPoint
  USERS: `/users`, //findAll
  USER_DETAIL: `/users/details/:id`, //details
  FORGOT_PASSWORD: "/users/forgot-password", //forgot password
  CHECK_PIN: "/users/check-pin", //check pin
  RESETPASSWORD: `/users/reset-password`, // reset password
  UPLOAD_AVATAR: `/users/upload-avatar/:id`, //add avatar
  UPDATE_PROFILE: `/users/update-profile/:id`, //update data profile
  UPDATE_STATUS: `/users/update-status/:id`, // update status
  // categories endPoint
  CATEGORY: `/categories`,
  CREATE_CATEGORY: `/categories/create`,
  UPDATE_CATEGORY: `/categories/update/:id`,
  REMOVE_CATEGORY: `/categories/remove/:id`,
};
