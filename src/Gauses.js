import React from "react";
import Chart from "react-google-charts";

const Gauses = ({ title = "Title", value = 0 }) => {
  return (
    <div className="Gauges">
      <div className="Gauges-title">{title}</div>
      <div className="Gauges-content">
        <Chart
          width={120}
          height={120}
          chartType="Gauge"
          loader={<div>Loading...</div>}
          data={[
            ["Label", "Value"],
            ["°C", value],
          ]}
          options={{
            min: -20,
            max: 40,
            greenFrom: -20,
            greenTo: 0,
            yellowFrom: 0,
            yellowTo: 10,
            redFrom: 10,
            redTo: 40,
            majorTicks: [
              "-20",
              "-15",
              "-10",
              "-5",
              "0",
              "5",
              "10",
              "15",
              "20",
              "25",
              "30",
              "35",
              "40",
            ],
            minorTicks: 0,
          }}
        />
      </div>
    </div>
  );
};

export default Gauses;
