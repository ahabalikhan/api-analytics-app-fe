import { useState, useEffect } from "react";

import ReactApexChart from "react-apexcharts";
import { Row, Col, Typography } from "antd";
import eChart from "./configs/eChart";
import { getChart } from "../../ApiServices/consumer-application.service";

function EChart() {
  const { Title, Paragraph } = Typography;
  const [data, setData] = useState({
    series: [
      {
        name: "Requests",
        data: [],
        color: "#fff",
      },
    ],

    options: {
      chart: {
        type: "bar",
        width: "100%",
        height: "auto",

        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
      },
      grid: {
        show: true,
        borderColor: "#ccc",
        strokeDashArray: 2,
      },
      xaxis: {
        categories: [],
        labels: {
          show: true,
          align: "right",
          minWidth: 0,
          maxWidth: 160,
          style: {
            colors: [
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
            ],
          },
        },
      },
      yaxis: {
        labels: {
          show: true,
          align: "right",
          minWidth: 0,
          maxWidth: 160,
          style: {
            colors: [
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
            ],
          },
        },
      },

      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  });

  const getData = async () => {
    let response = await getChart();
    setData({
      series: [
        {
          name: "Requests",
          data: response.data.counts,
          color: "#fff",
        },
      ],

      options: {
        chart: {
          type: "bar",
          width: "100%",
          height: "auto",

          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            borderRadius: 5,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["transparent"],
        },
        grid: {
          show: true,
          borderColor: "#ccc",
          strokeDashArray: 2,
        },
        xaxis: {
          categories: response.data.months,
          labels: {
            show: true,
            align: "right",
            minWidth: 0,
            maxWidth: 160,
            style: {
              colors: [
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
              ],
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            align: "right",
            minWidth: 0,
            maxWidth: 160,
            style: {
              colors: [
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
              ],
            },
          },
        },

        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
      },
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>

      <div id="chart">
        {
          <ReactApexChart
            className="bar-chart"
            options={data.options}
            series={data.series}
            type="bar"
            height={300}
          />
        }
      </div>
      <div className="chart-vistior">
        <Title level={5}>Monthly Usage</Title>
        <Paragraph className="lastweek">
          Here you can see the usage of your website over previous months.
        </Paragraph>

      </div>
    </>
  );
}

export default EChart;
