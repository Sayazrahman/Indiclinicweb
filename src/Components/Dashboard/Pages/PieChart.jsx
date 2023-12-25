import React from "react";
import { Chart } from "react-google-charts";


export default function PieChart() {

    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7], // CSS-style declaration
      ];
      const options = {
        title: "My Daily Activities",
        pieHole: 0.4,
        is3D: false,
      };
  return (
    <div className="col-xxl-1 col-md-5 mt-2" style={{  boxShadow: "rgb(120 165 249 / 82%) 0px 5px 10px", }}>
  <Chart
      chartType="PieChart"
      width="auto"
      height="400px"
      data={data}
      options={options}
    />
    </div>
  
  );
}
