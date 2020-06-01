import React, { useEffect, createRef } from "react";
import Chart from "chart.js";
import classes from "./DoughnutChart.module.css";

let doughnutChart;
Chart.defaults.global.defaultFontFamily = "sans-serif";
Chart.defaults.global.legend.display = true;

const DoughnutChart = () => {
  const chartRef = createRef();

  useEffect(() => {
    buildChart();
  });

  const buildChart = () => {
    const doughnutChartRef = chartRef.current.getContext("2d");
    if (typeof doughnutChart !== "undefined") doughnutChart.destroy();

    doughnutChart = new Chart(doughnutChartRef, {
      type: "doughnut",
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
      <canvas id="doughnutChart" ref={chartRef} />
    </div>
  );
};

export default DoughnutChart;
