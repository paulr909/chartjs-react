import React, { useEffect, createRef } from "react";
import Chart from "chart.js";
import classes from "./LineChart.module.css";

let lineChart;
Chart.defaults.global.defaultFontFamily = "sans-serif";
Chart.defaults.global.legend.display = true;

const LineChart = ({ data, average, labels }) => {
  const chartRef = createRef();

  useEffect(() => {
    buildChart();
  });

  const buildChart = () => {
    const lineChartRef = chartRef.current.getContext("2d");
    if (typeof lineChart !== "undefined") lineChart.destroy();

    lineChart = new Chart(lineChartRef, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Sales",
            data: data,
            fill: false,
            borderColor: "#36A2EB",
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
    });
  };

  return (
    <div className={classes.graphContainer}>
      <canvas id="lineChart" ref={chartRef} />
    </div>
  );
};

export default LineChart;
