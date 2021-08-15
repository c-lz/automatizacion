import React from "react";
import Chart from "react-google-charts";

const LineChart = ({
  title = "Title",
  variable = "Variable",
  data = [],
  width = 600,
  height = 600,
}) => {
  return (
    <div className="LineChart">
      <div className="LineChart-title">{title}</div>
      <div className="LineChart-content">
        <Chart
          width={width}
          height={height}
          chartType="LineChart"
          loader={<div>Loading...</div>}
          data={[
            ["x", variable],
            ...data,
            [0, 0],
            [1, 10],
            [2, 23],
            [3, 17],
            [4, 18],
            [5, 9],
            [6, 11],
            [7, 27],
            [8, 33],
            [9, 40],
            [10, 32],
            [11, 35],
          ]}
          options={{
            hAxis: {
              title: "Time",
            },
            vAxis: {
              title: "Popularity",
            },
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </div>
  );
};

export default LineChart;
