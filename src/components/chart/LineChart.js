import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "./configs/lineChart";
import { useState } from 'react';
import { getChart } from "../../ApiServices/consumer-application.service";
import { useEffect } from 'react';

function LineChart() {
  const { Title, Paragraph } = Typography;
  const [data, setData] = useState(null);
  const getData = async () => {
    let response = await getChart();
    setData({
      series: [
        {
          name: "Requests",
          data: response.data.counts,
          offsetY: 0,
        },
      ],

      options: {
        chart: {
          width: "100%",
          height: 350,
          type: "area",
          toolbar: {
            show: false,
          },
        },

        legend: {
          show: false,
        },

        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },

        yaxis: {
          labels: {
            style: {
              fontSize: "14px",
              fontWeight: 600,
              colors: ["#8c8c8c"],
            },
          },
        },

        xaxis: {
          labels: {
            style: {
              fontSize: "14px",
              fontWeight: 600,
              colors: [
                "#8c8c8c",
                "#8c8c8c",
                "#8c8c8c",
                "#8c8c8c",
                "#8c8c8c",
                "#8c8c8c",
                "#8c8c8c",
                "#8c8c8c",
                "#8c8c8c",
              ],
            },
          },
          categories: response.data.months,
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
      <div className="linechart">
        <div>
          <Title level={5}>Monthly Usage</Title>
        </div>
        <div className="sales">
          <ul>
            <li>{<MinusOutlined />} Requests</li>
          </ul>
        </div>
      </div>
      {data &&
        <ReactApexChart
          className="full-width"
          options={data?.options}
          series={data?.series}
          type="area"
          height={350}
          width={"100%"}
        />}
    </>
  );
}

export default LineChart;
