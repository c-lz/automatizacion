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
            min: 0,
            max: 320,
            greenFrom: 0,
            greenTo: 100,
            yellowFrom: 100,
            yellowTo: 200,
            redFrom: 200,
            redTo: 320,
            majorTicks: [
              "0",
              "40",
              "80",
              "120",
              "160",
              "200",
              "240",
              "280",
              "320",
            ],
            minorTicks: 0,
          }}
        />
      </div>
    </div>
  );
};

export default Gauses;
