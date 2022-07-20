import { Space, Table, Tag, Typography } from "antd";
import React from "react";
import { useEffect, useState } from "react";
import { getChart } from "../../ApiServices/consumer-application.service";
import { getNodeList } from "../../ApiServices/node.service";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Node",
    dataIndex: "node",
    key: "node",
  },
];
// const data = [
//   {

//     id: 1,
//     node: 'Home',
//   },
//   {

//     id: 2,
//     node: 'Contact',
//   },
//   {

//     id: 3,
//     node: 'About',
//   },
//   {

//     id: 4,
//     node: 'Blogs',
//   },
//   {

//     id: 5,
//     node: 'Articles',
//   },
// ];

const NodesTable = () => {
  const [data, setData] = useState(null);

  const { Title, Text } = Typography;

  const getData = async () => {
    let response = await getNodeList();
    setData(response.data.map((x) => ({ id: x.id, node: x.name })));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    data && (
      <>
        <div className="linechart">
          <Title level={5}>Nodes</Title>
        </div>
        <Table columns={columns} dataSource={data} pagination={false}/>
      </>
    )
  );
};

export default NodesTable;
