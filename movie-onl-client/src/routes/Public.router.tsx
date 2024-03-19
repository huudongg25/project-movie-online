import { Route, Routes } from "react-router-dom";
import FavoriteList from "../pages/FavoriteList/FavoriteList";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import Checkout from "../pages/Checkout/Checkout";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";

export const routesPath = {
  home: "/",
  mediaList: (type: string) => `/${type}`,
  mediaDetail: (type: string, id: string) => `/${type}/${id}`,
  person: (id: string) => `/person/${id}`,
  favoriteList: "/favorites",
  reviewList: "/reviews",
  passwordUpdate: "password-update",
};
const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/movie-detail" element={<MovieDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/history-payment" element={<PaymentHistory />} />
      </Routes>
    </>
  );
};

export default PublicRouter;
