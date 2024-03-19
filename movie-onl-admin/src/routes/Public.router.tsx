import React from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "../components/Movies/Movies";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import DashBoard from "../components/DashBoard/DashBoard";
import Users from "../components/Users/Users";
import CreateMovie from "../components/CreateMovie/CreateMovie";
import EditMovie from "../components/EditMovie/EditMovie";
import Login from "../components/Login/Login";
import Order from "../components/Order/Order";

const PublicRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<DefaultLayout child={<DashBoard />} />}
        />
        <Route path="/movies" element={<DefaultLayout child={<Movies />} />} />
        <Route path="/users" element={<DefaultLayout child={<Users />} />} />
        <Route
          path="/create-movie"
          element={<DefaultLayout child={<CreateMovie />} />}
        />
        <Route
          path="/edit-movie"
          element={<DefaultLayout child={<EditMovie />} />}
        />
        <Route path="/orders" element={<DefaultLayout child={<Order />} />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
};

export default PublicRouters;
