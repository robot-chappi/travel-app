import React from "react";
import { Pie } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const ChartTwo = () => {
  const pieChartData = {
    labels: ["The first year", "The second year", "The third year", "The fourth year", "The fifth year"],
    datasets: [{
        data: [700, 820, 1200, 2500, 7000],
        label: "Tourism assistance",
        backgroundColor: ["#3dc8ff", "#3df9ff", "#a13dff", "#ff565e", "#ffffff"],
        hoverBackgroundColor: ["#3dc8ffcc", "#3df9ffc2", "#a13dffad", "#ff565eb7", "#ffffffb0"]
    }]
  };
  const pieChart = (
    <Pie
      type="pie"
      width={130}
      height={50}
      options={{
        title: {
          display: true,
          text: "Statistics of our travelers for one year",
          fontSize: 15
        },
        legend: {
          display: false, //Is the legend shown?
          position: "top" //Position of the legend.
        }
      }}
      data={pieChartData}
    />
  );
  return pieChart;
};
export default ChartTwo;