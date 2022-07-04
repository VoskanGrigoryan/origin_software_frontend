import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { useSelector } from "react-redux";

const ActionDetail = () => {
  const info = useSelector((state) => state.actionDetail);

  const [hoverData, setHoverData] = useState(null);

  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      categories: [],
    },
    title: {
      text: "Action details",
    },
    series: [
      {
        name: "date",
        data: [],
      },
    ],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver(e) {
              setHoverData(e.target.category);
            },
          },
        },
      },
    },
  });

  useEffect(() => {
    const numberData = info?.values?.map((elem) => JSON.parse(elem.open));
    const timeData = info?.values?.map((elem) => elem.datetime);

    setChartOptions({
      ...chartOptions,
      series: [{ data: numberData }],
      xAxis: { categories: timeData },
    });
  }, [info]);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      {/* <h3>Hovering over {hoverData}</h3> */}
    </div>
  );
};

export default ActionDetail;
