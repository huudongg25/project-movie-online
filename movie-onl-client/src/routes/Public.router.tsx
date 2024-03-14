import { Route, Routes } from "react-router-dom";
import FavoriteList from "../pages/FavoriteList/FavoriteList";

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/favorites" element={<FavoriteList />} />
      </Routes>
    </>
  );
};

export default PublicRouter;
