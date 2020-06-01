import React, { useEffect, createRef } from "react";
import Chart from "chart.js";
import classes from "./PieChart.module.css";

let pieChart;
Chart.defaults.global.defaultFontFamily = "sans-serif";
Chart.defaults.global.legend.display = true;

const PieChart = () => {
  const chartRef = createRef();

  useEffect(() => {
    buildChart();
  });

  const buildChart = () => {
    const pieChartRef = chartRef.current.getContext("2d");
    if (typeof pieChart !== "undefined") pieChart.destroy();

    pieChart = new Chart(pieChartRef, {
      type: "pie",
      data: {
        labels: [
          "Saudi Arabia",
          "Russia",
          "Iraq",
          "United Arab Emirates",
          "Canada",
        ],
        datasets: [
          {
            data: [133.3, 86.2, 52.2, 51.2, 50.2],
            backgroundColor: [
              "#FF6384",
              "#ffc163",
              "#84FF63",
              "#8463FF",
              "#6384FF",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  };

  return (
    <div className={classes.graphContainer}>
      <canvas id="pieChart" ref={chartRef} />
    </div>
  );
};

export default PieChart;
