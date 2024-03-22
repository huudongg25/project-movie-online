import { Route, Routes } from "react-router-dom";
import FavoriteList from "../pages/FavoriteList/FavoriteList";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import Checkout from "../pages/Checkout/Checkout";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import HomePage from "../pages/Home/HomePage";
import PrivateRouter from "./Private.router";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

export const routesPath = {
  home: "/",
  mediaList: (type: string) => `/${type}`,
  mediaDetail: (type: string, id: string) => `/${type}/${id}`,
  person: (id: string) => `/person/${id}`,
  favoriteList: "/favorites",
  reviewList: "/reviews",
  passwordUpdate: "password-update",
};
const PublicRouter = () => (
  <Routes>
    <Route
      index
      element={
        <DefaultLayout>
          <HomePage />
        </DefaultLayout>
      }
    />
    <Route
      path="/password-update"
      element={
        <PrivateRouter>
          <ChangePassword />
        </PrivateRouter>
      }
    />
    <Route
      path="/favorites"
      element={
        <PrivateRouter>
          <FavoriteList />
        </PrivateRouter>
      }
    />
    <Route path="/:mediaType/:mediaId" element={<MovieDetail />} />
  </Routes>
);

export default PublicRouter;
