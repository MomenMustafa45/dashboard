import React from "react";
import "./graphic-analysis-line.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const GraphicAnalysisLine = () => {
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
        data: [0, 105, 50, 30, 250, 100, 380, 290, 310, 240, 350, 390],
        pointRadius: 0,
        backgroundColor: "#fff",
        borderColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(218,13,24,1)");
          gradient.addColorStop(1, "rgba(218,13,24,0.4)");
          return gradient;
        },
        borderWidth: 7,
      },
    ],
  };

  const options = {
    tension: 0.4,
    scales: {
      y: {
        max: 400,
        min: 0,
        ticks: {
          stepSize: 100,
        },
      },
    },
  };

  return (
    <div className="graphic-analysis-line-parent">
      <div className="header-graphic-anal-line">
        <p>Overall User Activity</p>
        <form>
          <select>
            <option value="Creators">Creators</option>
            <option value="Users">Users</option>
          </select>
        </form>
      </div>

      {/* Graphic */}
      {/* Graphic */}

      <Line data={data} options={options} />
    </div>
  );
};

export default GraphicAnalysisLine;
