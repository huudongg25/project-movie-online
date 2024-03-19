import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUserCog } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import "./SideBar.css";
import Button from "@mui/material/Button";
import { FaBagShopping } from "react-icons/fa6";

const SideBar: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const navigate = useNavigate();
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <aside className="sidebar">
        <div className="logo-admin">
          <img
            src="https://res.cloudinary.com/dv9tkz5pa/image/upload/v1710385308/myImages/ithn4rc3ei2l6bf6rwb1.png"
            alt=""
          />
        </div>
        <hr />
        <ul>
          <li
            className={`list-item ${
              location.pathname === "/dashboard" ? "active" : ""
            }`}
            onClick={() => handleTabClick("dashboard")}
          >
            <Link className="sidebar-link" to="/dashboard">
              <MdDashboard />
              Trang chủ
            </Link>
          </li>
          <li
            className={`list-item ${
              location.pathname === "/users" ? "active" : ""
            }`}
            onClick={() => handleTabClick("users")}
          >
            <Link className="sidebar-link" to="/users">
              <FaUserCog /> Quản lí người dùng
            </Link>
          </li>
          <li
            className={`list-item ${
              location.pathname === "/movies" ? "active" : ""
            }`}
            onClick={() => handleTabClick("movies")}
          >
            <Link className="sidebar-link" to="/movies">
              <MdMovie />
              Quản lí phim
            </Link>
          </li>
          <li
            className={`list-item ${
              location.pathname === "/orders" ? "active" : ""
            }`}
            onClick={() => handleTabClick("orders")}
          >
            <Link className="sidebar-link" to="/orders">
              {" "}
              <FaBagShopping />
              Quản lí đơn hàng
            </Link>
          </li>

          <div className="logout-btn">
            <Button variant="outlined" color="error">
              Log out
            </Button>
          </div>
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;
