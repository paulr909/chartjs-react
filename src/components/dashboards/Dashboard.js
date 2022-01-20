import React from "react";
import { Link } from "react-router-dom";
import { BarChart } from "../charts/BarChart";
import chartIcon from "../../assets/chart-icon.svg";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={classes.container}>
      <header>
        <img src={chartIcon} alt="bar chart icon" />
        <h1>Dashboard</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/sales-dashboard">Sales Dashboard</Link>
      </header>
      <BarChart />
    </div>
  );
};

export default Dashboard;
