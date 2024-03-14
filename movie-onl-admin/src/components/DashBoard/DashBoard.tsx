import React from "react";
import { Link } from "react-router-dom";

import { FaRegUser, FaRegMoneyBillAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
import "./DashBoard.css";
import { BarChart } from "@mui/x-charts";
import { MdMovie } from "react-icons/md";

const Dashboard: React.FC = () => {
  return (
    <section className="content active">
      <ToastContainer></ToastContainer>
      <div className="dashboard-content">
        <div className="cardBox">
          <Card
            link="/users"
            icon={<FaRegUser className="dashboard-icon" />}
            name="Users"
            count={10}
          />
          <Card
            link="/products"
            icon={<MdMovie className="dashboard-icon" />}
            name="Movies"
            count={20}
          />
          <Card
            link="/orders"
            icon={<FaRegMoneyBillAlt className="dashboard-icon" />}
            name="Revenue"
            count={5000}
          />
        </div>
      </div>
      <BarChart
        series={[
          { data: [35, 44, 24, 34] },
          { data: [51, 6, 49, 30] },
          { data: [15, 25, 30, 50] },
          { data: [60, 50, 15, 25] },
        ]}
        height={290}
        xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
    </section>
  );
};

interface CardProps {
  link: string;
  icon: React.ReactNode;
  name: string;
  count: number | string;
}

const Card: React.FC<CardProps> = ({ link, icon, name, count }) => (
  <div className="card">
    <div>
      <div className="numbers">{count}</div>
      <div className="cardName">{name}</div>
    </div>
    <div className="iconBx">
      <Link to={link}>{icon}</Link>
    </div>
  </div>
);

export default Dashboard;
