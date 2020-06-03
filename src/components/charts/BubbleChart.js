import React, { useEffect, createRef } from "react";
import Chart from "chart.js";
import classes from "./BubbleChart.module.css";

let bubbleChart;
Chart.defaults.global.defaultFontFamily = "sans-serif";
Chart.defaults.global.legend.display = true;

const BubbleChart = () => {
  const chartRef = createRef();

  useEffect(() => {
    buildChart();
  });

  const buildChart = () => {
    const bubbleChartRef = chartRef.current.getContext("2d");
    if (typeof bubbleChart !== "undefined") bubbleChart.destroy();

    bubbleChart = new Chart(bubbleChartRef, {
      type: "bubble",
      data: {
        datasets: [
          {
            label: ["China"],
            backgroundColor: "rgba(255,221,50,0.2)",
            borderColor: "rgba(255,221,50,1)",
            data: [
              {
                x: 21269017,
                y: 5.245,
                r: 15,
              },
            ],
          },
          {
            label: ["UK"],
            backgroundColor: "rgba(60,186,159,0.2)",
            borderColor: "rgba(60,186,159,1)",
            data: [
              {
                x: 258702,
                y: 7.526,
                r: 10,
              },
            ],
          },
          {
            label: ["Germany"],
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "#000",
            data: [
              {
                x: 3979083,
                y: 6.994,
                r: 15,
              },
            ],
          },
          {
            label: ["Japan"],
            backgroundColor: "rgba(193,46,12,0.2)",
            borderColor: "rgba(193,46,12,1)",
            data: [
              {
                x: 4931877,
                y: 5.921,
                r: 15,
              },
            ],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Predicted world population (million) in 2050",
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Health",
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "GDP (PPP)",
              },
            },
          ],
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  };

  return (
    <div className={classes.graphContainer}>
      <canvas id="bubbleChart" ref={chartRef} />
    </div>
  );
};

export default BubbleChart;
