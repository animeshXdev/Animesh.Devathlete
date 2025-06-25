"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Web Development", "Parkour"],
  datasets: [
    {
      label: "Skill Categories",
      data: [70, 30],
      backgroundColor: ["#10b981", "#0f766e"],
      borderColor: ["#fff", "#fff"],
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        color: "#58D4C9",
        font: { size: 13 },
      },
    },
  },
};

export default function SkillPieChart() {
  return (
    <div className="w-full sm:w-[300px] mx-auto">
      <Pie  data={data} options={options} />
    </div>
  );
}
