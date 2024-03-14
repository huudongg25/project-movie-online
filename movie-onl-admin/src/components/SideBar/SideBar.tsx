import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUserCog } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import "./SideBar.css";
import Button from "@mui/material/Button";

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
              Dashboard
            </Link>
          </li>
          <li
            className={`list-item ${
              location.pathname === "/users" ? "active" : ""
            }`}
            onClick={() => handleTabClick("users")}
          >
            <Link className="sidebar-link" to="/users">
              <FaUserCog /> Users Management
            </Link>
          </li>
          <li
            className={`list-item ${
              location.pathname === "/products" ? "active" : ""
            }`}
            onClick={() => handleTabClick("products")}
          >
            <Link className="sidebar-link" to="/movies">
              <CiBoxList />
              Movies Management
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
              <CiMoneyBill />
              Orders Management
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
