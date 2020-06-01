import React, { useEffect, createRef } from "react";
import Chart from "chart.js";
import classes from "./BarChart.module.css";

let barChart;
Chart.defaults.global.defaultFontFamily = "sans-serif";
Chart.defaults.global.legend.display = true;

const BarChart = ({ data, average, labels }) => {
  const chartRef = createRef();

  useEffect(() => {
    buildChart();
  });

  const buildChart = () => {
    const barChartRef = chartRef.current.getContext("2d");
    if (typeof barChart !== "undefined") barChart.destroy();

    barChart = new Chart(barChartRef, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Sales",
            data: data,
            fill: false,
            backgroundColor: "#36A2EB",
          },
          {
            label: "National Average",
            data: average,
            fill: false,
            borderColor: "#E0E0E0",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      scales: {
        xAxes: [
          {
            stacked: true,
          },
        ],
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    });
  };

  return (
    <div className={classes.graphContainer}>
      <canvas id="barChart" ref={chartRef} />
    </div>
  );
};

export default BarChart;
