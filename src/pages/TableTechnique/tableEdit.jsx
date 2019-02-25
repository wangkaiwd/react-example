import React, { Component } from 'react';
import { Input, Form, Table } from 'antd';
import styles from './tableEdit.less';

@Form.create()
class TableEdit extends Component {
  state = {
    data: [],
    currentPage: 1,
    pageSize: 10
  };
  columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      render: (text, record, i) => this.editForm({ record, i, field: 'name', title: '名称' })
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      render: (text, record, i) => this.editForm({ record, i, field: 'age', title: '年龄' })
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      render: (text, record, i) => this.editForm({ record, i, field: 'address', title: '地址' })
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record, i) => <a href="javascript:;" onClick={() => this.onClickDelete(i)}>delete</a>
    }
  ];
  componentDidMount = () => {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: `key${i.toString()}`,
        name: `name ${i}`,
        age: 18,
        address: `New York ${i}`
      });
    }
    this.setState({ data });
  };
  // 生成所有数据的索引
  createRowkey = (i) => {
    const { currentPage, pageSize } = this.state;
    return i + (currentPage - 1) * pageSize;
  };
  // 通过一个对象来配置Input
  // 主要利用的功能：this.props.form.getFieldDecorator(id,options) , 这里参数id支持嵌套式的写法
  // https://github.com/react-component/form/pull/48
  editForm = (formInfo) => {
    const { field, title, record, i } = formInfo;
    const { getFieldDecorator } = this.props.form;
    const rowKey = this.createRowkey(i);
    return (
      <Form.Item>
        {getFieldDecorator(`member[${rowKey}][${field}]`, {
          rules: [{ required: true, message: `Please input ${field}` }],
          initialValue: record[field] || ''
        })(
          <Input
            type="text"
            onKeyUp={() => this.onChangeInput(record.key, rowKey)}
            placeholder={`Please input ${title}`}
          />
        )}
      </Form.Item>
    );
  };
  onChange = (page) => {
    this.setState({ currentPage: page });
  };
  onChangeInput = (key, rowKey) => {
    const { member } = this.props.form.getFieldsValue();
    const { data } = this.state;
    const newData = data.map(item => {
      if (item.key === key) {
        return { ...item, ...member[rowKey] };
      }
      return item;
    });
    this.setState({ data: newData });
  };
  onClickDelete = (i) => {
    const rowKey = this.createRowkey(i);
    const { data } = this.state;
    data.splice(rowKey, 1);
    this.setState({ data });
  };

  render () {
    const { data, currentPage, pageSize } = this.state;
    return (
      <div className={styles['table-edit']}>
        <Table
          dataSource={data}
          columns={this.columns}
          pagination={{ current: currentPage, onChange: this.onChange, pageSize }}
        />
      </div>
    );
  }
}

export default TableEdit;