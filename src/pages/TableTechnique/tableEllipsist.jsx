import React, { Component } from 'react';
import { Table, Divider, Tag, Tooltip } from 'antd';
import styles from './example.less'
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 100,
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: 100,
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  className: styles.columns,
  width: 100,
  render: (text) => {
    return (
      <Tooltip title={text}>
        {/* 鼠标移入进行提示 */}
        <div className={styles.ell}>{text}</div>
      </Tooltip>
    )
  }
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  width: 100,
  render: tags => (
    <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  width: 100,
  render: (text, record) => (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];
class TableEllipsis extends Component {
  render() {
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default TableEllipsis;