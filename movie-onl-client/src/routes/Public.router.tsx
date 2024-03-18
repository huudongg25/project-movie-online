import { Route, Routes } from "react-router-dom";
import FavoriteList from "../pages/FavoriteList/FavoriteList";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import Checkout from "../pages/Checkout/Checkout";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/movie-detail" element={<MovieDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/history" element={<PaymentHistory />} />
      </Routes>
    </>
  );
};

export default PublicRouter;
