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
        labels: ["China", "UK", "Germany", "Japan"],
        datasets: [
          {
            data: [133.3, 86.2, 52.2, 51.2],
            backgroundColor: [
              "rgba(255,221,50,0.2)",
              "rgba(60,186,159,0.2)",
              "rgba(0,0,0,0.2)",
              "rgba(193,46,12,0.2)",
            ],
            borderColor: [
              "rgba(255,221,50,1)",
              "rgba(60,186,159,1)",
              "#000",
              "rgba(193,46,12,1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Predicted GDP £ (millions) in 2050",
        },
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
