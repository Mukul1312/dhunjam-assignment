import { Bar } from "react-chartjs-2";
// eslint-disable-next-line react/prop-types
const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: "Custom Song Chart",
            },
            legend: {
              display: false,
            }
          }
        }}
      />
    </div>
  );
};

export default BarChart;