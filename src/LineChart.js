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
      <div className="LineChart-title">{`Gráfica de ${title}`}</div>
      <div className="LineChart-content">
        <Chart
          width={width}
          height={height}
          chartType="LineChart"
          loader={<div>Loading...</div>}
          data={[
            ["x", variable],
            ...data
          ]}
          options={{
            hAxis: {
              title: "Últimos 100 valores",
            },
            vAxis: {
              title: "Temperatura",
            },
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </div>
  );
};

export default LineChart;
