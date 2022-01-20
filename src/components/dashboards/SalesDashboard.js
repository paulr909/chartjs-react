import React from "react";
import { Link } from "react-router-dom";
import { LineChart } from "../charts/LineChart";
import chartIcon from "../../assets/chart-icon.svg";
import classes from "./Dashboard.module.css";

const SalesDashboard = () => {
  return (
    <div className={classes.container}>
      <header>
        <img src={chartIcon} alt="bar chart icon" />
        <h1>Sales Dashboard</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/sales-dashboard">Sales Dashboard</Link>
      </header>
      <LineChart />
    </div>
  );
};

export default SalesDashboard;
