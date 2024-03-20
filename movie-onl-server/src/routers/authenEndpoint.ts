export const BASE_PATH = "/api/v1";

export const ENDPOINT = {
  // auth endpoint
  LOGIN: `/auth/login`,
  REGISTER: `/auth/register`,
  LOGOUT: `/auth/logout`,
  // users endpoint
  USERS: `/users`, //findAll
  USER_DETAIL: `/users/details/:id`, //details
  FORGOT_PASSWORD: "/users/forgot-password", //forgot password
  CHECK_PIN: "/users/check-pin", //check pin
  RESETPASSWORD: `/users/reset-password`, // reset password
  UPLOAD_AVATAR: `/users/upload-avatar/:id`, //add avatar
  UPDATE_PROFILE: `/users/update-profile/:id`, //update data profile
  UPDATE_STATUS: `/users/update-status/:id`, // update status
  UPDATE_PRICE: `/users/update-price/:id`, // update status
  // categories endpoint
  CATEGORY: `/categories`,
  CREATE_CATEGORY: `/categories/create`,
  UPDATE_CATEGORY: `/categories/update/:id`,
  REMOVE_CATEGORY: `/categories/remove/:id`,
  //movies endpoint
  MOVIES: `/movies`,
  MOVIES_DETAILS: `/movies/details/:id`,
  MOVIES_HOT: `/movies/hots`,
  MOVIES_NEW: `/movies/news`,
  CREATE_MOVIES: `/movies/create`,
  UPDATE_MOVIES: `/movies/update/:id`,
  REMOVE_MOVIES: `/movies/remove/:id`,
  MOVIES_BUY: `/movies/buy/:id`,
  //watchHistory endpoint
  WATCH_HISTORY: `/watch-histories/:userId`,
  WATCH_HISTORY_CREATE: `/watch-histories/create`,
  WATCH_HISTORY_UPDATE: `/watch-histories/update/:id`,
  WATCH_HISTORY_DELETE: `/watch-histories/remove/:id`,
  //review endpoint
  REVIEW: `/reviews/:movieId`, //find all
  REVIEW_CREATE_REVIEW: `/reviews/create-review`, // create review
  REVIEW_CREATE_COMMENT: `/reviews/create-content`, // create comment
  REVIEW_UPDATE_RATTING_POINT: `/reviews/ratting-point`, // update ratting-point
  REVIEW_DETAIL: `/reviews/details/:userId/:movieId`, //find one by user movie
  // favorite endpoint
  FAVORITE: `/favorites/:movieId`, //find all by movieId
  FAVORITE_CREATE: `/favorites/create`, // create
};
