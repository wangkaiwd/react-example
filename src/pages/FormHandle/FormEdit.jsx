import React, { Component, Fragment } from 'react';
import { Table, Divider, Tag, Input } from 'antd'

class FormEdit extends Component {
  state = {
    data: [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      isEdit: false
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
      isEdit: false
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
      isEdit: false
    }]
  }
  editTable = (i) => {
    const { data } = this.state
    data[i].isEdit = !data[i].isEdit
    this.setState({ data })
  }
  handleChange = (e, i, key) => {
    const { data } = this.state
    data[i][key] = e.target.value
    this.setState({ data })
  }
  
  columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record, i) => {
      return (
        <Fragment>
          {record.isEdit ?
            <Input
              value={text}
              onChange={(e) => this.handleChange(e, i, 'name')}
              placeholder="请输入内容"
            />
            :
            <span>{text}</span>
          }
        </Fragment>
      )
    }
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
    render: (text, record, i) => (
      <span>
        <a href="javascript:;" onClick={() => this.editTable(i)}>
          {record.isEdit ? 'save' : 'edit'}
        </a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    ),
  }]
  render() {
    const { data } = this.state
    return (
      <div>
        <Table columns={this.columns} dataSource={data} />
      </div>
    );
  }
}

export default FormEdit;