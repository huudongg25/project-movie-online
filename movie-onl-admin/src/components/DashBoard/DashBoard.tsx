// Dashboard.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FaRegUser, FaRegMoneyBillAlt } from "react-icons/fa";
import { BarChart } from "@mui/x-charts";
import { MdMovie } from "react-icons/md";
import { getAllUser } from "../../api/user";
import { getAllMovies } from "../../api/movie";

import "./DashBoard.css";

const Dashboard: React.FC = () => {
  const [userCount, setUserCount] = useState<number>(0);
  const [movieCount, setMovieCount] = useState<number>(0);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const userResponse = await getAllUser("ASC", 3, 1, "");
      const movieResponse = await getAllMovies("ASC", 3, 1, "");

      setUserCount(userResponse.data.length);
      setMovieCount(movieResponse.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section className="content active">
      <ToastContainer />
      <h2>Dashboard</h2>
      <hr style={{ margin: "20px 0" }} />
      <div className="dashboard-content">
        <div className="cardBox">
          <Card
            link="/users"
            icon={<FaRegUser className="dashboard-icon" />}
            name="Users"
            count={userCount}
          />
          <Card
            link="/movies"
            icon={<MdMovie className="dashboard-icon" />}
            name="Movies"
            count={movieCount}
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
        height={360}
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
