import React from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "../components/Movies/Movies";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import DashBoard from "../components/DashBoard/DashBoard";
import Users from "../components/Users/Users";

const PublicRouters = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route
          path="/dashboard"
          element={<DefaultLayout child={<DashBoard />} />}
        />
        <Route path="/movies" element={<DefaultLayout child={<Movies />} />} />
        <Route path="/users" element={<DefaultLayout child={<Users />} />} />
        {/* <Route path="/orders" element={<DefaultLayout child={<Oders />} />} /> */}
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
};

export default PublicRouters;
