import React, { Component } from 'react'
import { Table, Divider, Tag, Input, DatePicker, Select, Form } from 'antd'
const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const Option = Select.Option;

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
  searchKey = {}
  formMeta = [
    {
      key: 'keywords',
      label: '关键字',
      widget: Input,
      widgetProps: {
        placeholder: '请输入关键字',
      }
    },
    {
      key: 'date',
      label: '时间',
      widget: RangePicker,
      widgetProps: {
        placeholder: ['起始时间', '结束时间']
      }
    },
    {
      key: 'status',
      label: '状态',
      widget: Select,
      widgetProps: {
        style: { width: '200px' },
        placeholder: '请选择状态'
      },
      children: [
        <Option key={1} value="1">状态1</Option>,
        <Option key={2} value="2">状态2</Option>,
        <Option key={3} value="3">状态3</Option>
      ]
    }
  ]
  getList = () => {
    const { pageKey } = this.props
    const { searchKey } = this
    const params = { ...searchKey, ...pageKey }
    console.log('params', params)
  }
  getSearchKey = (searchKey) => {
    // 将searchKey通过setState()方法放置到全局会报错(由于DatePicker组件引起)
    this.searchKey = searchKey
    this.getList()
  }
  render() {
    const { resetPageKey, pageOptions } = this.props
    return (
      <div>
        <FormSearch
          resetPageKey={resetPageKey}
          getSearchKey={this.getSearchKey}
          formMeta={this.formMeta}
        />
        <Table
          columns={columns}
          dataSource={data}
          pagination={pageOptions(this.getList)}
        />
      </div>
    );
  }
}

export default Paging(myComponents);