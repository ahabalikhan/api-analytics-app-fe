import { Space, Table, Tag } from 'antd';
import React from 'react';
import { getNodeList } from '../../ApiServices/node.service';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Node',
    dataIndex: 'node',
    key: 'node',
  },
];
const data = [
  {
    key: '1',
    id: '1',
    node: 'Home',
  },
  {
    key: '2',
    id: 2,
    node: 'Contact',
  },
  {
    key: '3',
    id: 3,
    node: 'About',
  },
  {
    key: '4',
    id: 4,
    node: 'Blogs',
  },
  {
    key: '5',
    id: 5,
    node: 'Articles',
  },
];

const NodesTable = () => <Table columns={columns} dataSource={data} />

export default NodesTable;