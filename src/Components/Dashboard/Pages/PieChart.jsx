import React from "react";
import { Chart } from "react-google-charts";


export default function PieChart() {

    const data = [
        ["Task", "Hours per Day"],
        ["Common Cold", 11],
        ["Covid", 2],
        ["Stomach disease", 2],
        ["Typhoid", 2],
        ["Dengue", 7], 
      ];
      const options = {
        title: "Patient diagnosed Today",
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
