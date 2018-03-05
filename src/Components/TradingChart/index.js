import React from "react";
import ReactApexChart from "react-apexcharts";

const CandlestickChart = (props) => {
  return (
    <div id="chart">
      <ReactApexChart
        options={props.chartData.options}
        series={props.chartData.series}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default CandlestickChart;
