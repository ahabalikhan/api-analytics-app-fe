import { useState, useEffect } from "react";

import { Card, Col, Row, Typography, Skeleton } from "antd";

import Echart from "../components/chart/EChart";
import LineChart from "../components/chart/LineChart";
import Graph from "../components/chart/Graph";
import NodesTable from "../components/tables/NodesTable";
import {
  getMonthsRequests,
  getPredictions,
  getTodaysRequests,
  getTotalRequests,
} from "../ApiServices/consumer-application.service";
import logo from "../assets/images/logo.png";
import cursor from "../assets/images/cursor-white.png";
import calendar from "../assets/images/calendar-white.png";
import calendarMonth from "../assets/images/calendar-white-2.png";

function Home() {
  const { Title, Text } = Typography;

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  const [reverse, setReverse] = useState(false);

  const [data, setData] = useState([null,null,null,null]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    let [todays, months, total, predictions] = await Promise.all([
      getTodaysRequests(),
      getMonthsRequests(),
      getTotalRequests(),
      getPredictions(),
    ]);
    // let todays = await getTodaysRequests();

    // let months = await getMonthsRequests();
    // let total = await getTotalRequests();
    setData([
      {
        today: "Today’s Clicks",
        title: `${todays.data.count}`,
        persent:
          todays.data.percentage > 0
            ? `+${todays.data.percentage}%`
            : `${todays.data.percentage}%`,
        icon: <img src={calendar} height={40} width={40} />,
        bnb: todays.data.percentage > 0 ? "bnb2" : "redtext",
      },
      {
        today: "Month's Clicks",
        title: `${months.data.count}`,
        persent:
          months.data.percentage > 0
            ? `+${months.data.percentage}%`
            : `${months.data.percentage}%`,
        icon: <img src={calendarMonth} height={40} width={40} />,
        bnb: months.data.percentage > 0 ? "bnb2" : "redtext",
      },
      {
        today: "Total Clicks",
        title: `${total.data.count}`,
        persent: "",
        icon: <img src={cursor} height={40} width={40} />,
        bnb: total.data.percentage > 0 ? "bnb2" : "redtext",
      },
      {
        today: "Predictions",
        title: `${predictions.data.count}`,
        persent:
          predictions.data.percentage > 0
            ? `+${predictions.data.percentage}%`
            : `${predictions.data.percentage}%`,
        icon: <img src={logo} height={40} width={40} />,
        bnb: predictions.data.percentage > 0 ? "bnb2" : "redtext",
      },
    ]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {
          data.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              className="mb-24"
            >
              <Card bordered={false} className="criclebox ">
              { data[0] ?
                <div className="number">
                  
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={18}>
                      <span>{c.today}</span>
                      <Title level={3}>
                        {c.title} <small className={c.bnb}>{c.persent}</small>
                      </Title>
                    </Col>
                    <Col xs={6}>
                      <div className="icon-box">
                        {c.icon}
                        </div>
                    </Col>
                  </Row>
                </div>
                : <Skeleton active paragraph={{ rows: 1 }}/>
                }
              </Card>
            </Col>
          ))}

        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={10} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <Echart />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={14} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <LineChart />
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={10} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <NodesTable />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={14} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <div className="project-ant">
                <div>
                  <Title level={5}>Graph</Title>
                </div>
                <Graph />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
