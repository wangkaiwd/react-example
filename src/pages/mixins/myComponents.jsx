import React, { Component } from 'react'
import { Table, Divider, Tag, Input, DatePicker } from 'antd'
const { RangePicker } = DatePicker;

import Paging from './Paging'
import FormSearch from './FormSearch'
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
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

class myComponents extends Component {
  state = {

  }
  formMeta = [
    {
      key: 'keywords',
      label: '关键字',
      widget: Input,
      widgetProps: {
        placeholder: '请输入关键字',
      },
      fieldsDecoratorProps: {
        rules: []
      }
    },
    {
      key: 'date',
      label: '时间',
      widget: RangePicker,
      widgetProps: {
        placeholder: ['起始时间', '结束时间']
      },
      fieldsDecoratorProps: {
        rules: []
      }
    }
  ]
  getList = (queryData = {}) => {
    const { pageKey } = this.props.pageKey
    const params = { ...queryData, ...pageKey }
    console.log('params', params)
  }
  render() {
    return (
      <div>
        <FormSearch getList={this.getList} formMeta={this.formMeta} />
        <Table
          columns={columns}
          dataSource={data}
          pagination={this.props.pageOptions()}
        />
      </div>
    );
  }
}

export default Paging(myComponents);