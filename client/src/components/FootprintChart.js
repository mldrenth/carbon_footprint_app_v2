import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FootprintChart = ({
  electricityValue,
  carValue,
  dietValue,
  flyingValue,
}) => {
  const options = {
    title: {
      text: "",
    },
    colors: ["#6b9080", "#708D7D", "#a4c3b2", "#CCE3DE"],
    chart: {
      type: "pie",
      backgroundColor: null,

      width: 550,
      marginRight: 35,
    },
    dataLabels: {
      padding: 0,
      style: {
        fontSize: "8px",
      },
    },

    series: [
      {
        data: [
          {
            name: "Electricity",
            y: electricityValue,
          },
          {
            name: "Car",
            y: carValue,
          },
          {
            name: "Diet",
            y: dietValue,
          },
          {
            name: "Flying",
            y: flyingValue,
          },
        ],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        minWidth="300px"
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default FootprintChart;
