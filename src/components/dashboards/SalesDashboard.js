import React, { useState } from "react";
import { Link } from "react-router-dom";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
// import BubbleChart from "../charts/BubbleChart";
// import DoughnutChart from "../charts/DoughnutChart";
// import PieChart from "../charts/PieChart";
import chartIcon from "../../assets/chart-icon.svg";
import {
  managerData,
  nationalAverageData,
  yearLabels,
  managerQuarterData,
  nationalAverageQuarterData,
  quarterLabels,
} from "../../data/mockData";
import classes from "./SalesDashboard.module.css";

const SalesDashboard = () => {
  const [data, setData] = useState(managerData);
  const [average, setAverage] = useState(nationalAverageData);
  const [labels, setLabels] = useState(yearLabels);

  const handleClick = (e) => {
    const { value } = e.target;
    const isAnnual = value === "annual";

    const newData = isAnnual ? managerData : managerQuarterData;
    const newLabels = isAnnual ? yearLabels : quarterLabels;
    const newAverage = isAnnual
      ? nationalAverageData
      : nationalAverageQuarterData;

    setData(newData);
    setAverage(newAverage);
    setLabels(newLabels);
  };

  return (
    <div className={classes.container}>
      <header>
        <img src={chartIcon} alt="bar chart icon" />
        <h1>Sales Dashboard</h1>
        <Link to="/">Dashboard</Link>
      </header>
      <div className={classes.buttonContainer}>
        <button value="annual" onClick={handleClick}>
          Annual
        </button>
        <button value="lastquarter" onClick={handleClick}>
          Last Quarter
        </button>
      </div>
      {/* Display 2 charts by default using mockData.js */}
      <BarChart data={data} average={average} labels={labels} />
      <LineChart data={data} average={average} labels={labels} />

      {/*<BubbleChart />*/}
      {/*<DoughnutChart />*/}
      {/*<PieChart />*/}
    </div>
  );
};

export default SalesDashboard;
