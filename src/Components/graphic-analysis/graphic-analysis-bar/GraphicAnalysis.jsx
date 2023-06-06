import React from "react";
import "./graphic-analysis.css";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const GraphicAnalysis = () => {
  let data = {
    labels: [
      "1/12",
      "2/12",
      "3/12",
      "4/12",
      "5/12",
      "6/12",
      "7/12",
      "8/12",
      "9/12",
      "10/12",
      "11/12",
      "12/12",
    ],
    datasets: [
      {
        label: "User",
        data: [680, 420, 500, 570, 640, 470, 665, 480, 620, 635, 350, 460],
        backgroundColor: ["#E8E8E8"],
        pointBackgroundColor: "rgb(82,134,163)",
        pointBorderColor: "rgb(82,134,163)",
        barThickness: 7,
        borderRadius: 5,
      },
      {
        label: "Income",
        data: [500, 550, 480, 610, 570, 530, 600, 520, 590, 610, 420, 410],
        backgroundColor: ["#DA0D18"],
        pointBackgroundColor: "rgb(82,134,163)",
        pointBorderColor: "rgb(82,134,163)",
        barThickness: 7,
        borderRadius: 5,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        max: 700,
        min: 100,
        ticks: {
          stepSize: 100,
        },
      },
    },
  };
  return (
    <div className="graphic-analystic-parent">
      <div className="header-graphic-anal">
        <p>Overall User Activity</p>

        <div className="details-container">
          <p>
            <span></span> User
          </p>
          <p>
            <span></span> Income
          </p>
        </div>
      </div>
      {/* Graphic */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default GraphicAnalysis;
