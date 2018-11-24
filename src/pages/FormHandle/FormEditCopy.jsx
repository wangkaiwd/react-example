import React, { Component } from 'react';
import { Table, Checkbox, Input } from 'antd';
//可编辑表格
export default class EditTable extends Component {
  textChange(e, record) {
    let rows = [...this.state.data];
    let row = rows.find(item => item.key == record.key);
    if (row) {
      row.displayName = e.target.value;
    }
    console.log('rows', rows);
    this.setState({
      data: rows
    })
  }
  checkedChange(e, record) {
    let rows = [...this.state.data];
    let row = rows.find(item => item.key == record.key);
    if (row) {
      row.sortable = e.target.checked;
    }
    console.log('rows', rows);
    this.setState({
      data: rows
    })
  }
  changeToEdit(record) {
    let cacheData = [...this.state.editCacheData];
    cacheData.push({
      key: record.key,
      property: record.property,
      displayName: record.displayName,
      sortable: record.sortable,
      dataFormat: record.dataFormat,
      displayStyle: record.displayStyle,
      displayOrder: record.displayOrder,
      fontStyle: record.fontStyle
    })
    this.setState({
      editCacheData: cacheData
    });
  }
  okToDisplay(record) {
    let cacheData = [...this.state.editCacheData];
    let index = cacheData.findIndex((e, i, a) => e.key === record.key);
    cacheData.splice(index, 1);
    this.setState({
      editCacheData: cacheData
    });
  }
  cancelToDisplay(record) {
    let tableData = [...this.state.data];
    let cacheData = [...this.state.editCacheData];
    let row = tableData.find(item => item.key == record.key);
    if (row) {
      let editRow = cacheData.find(item => item.key == record.key);
      if (editRow) {
        row.key = editRow.key;
        row.property = editRow.property;
        row.displayName = editRow.displayName;
        row.sortable = editRow.sortable;
        row.dataFormat = editRow.dataFormat;
        row.displayStyle = editRow.displayStyle;
        row.displayOrder = editRow.displayOrder;
        row.fontStyle = editRow.fontStyle;
      }
    }
    let index = cacheData.findIndex((e, i, a) => e.key === record.key);
    cacheData.splice(index, 1);
    this.setState({
      data: tableData,
      editCacheData: cacheData
    });
  }

  constructor(props) {
    super(props);
    //全部数据
    this.state = {
      data: [{
        key: '1',
        property: '属性1',
        displayName: '显示名称1',
        sortable: true,
        dataFormat: '{0}%',
        displayStyle: "default",
        displayOrder: 1,
        fontStyle: 'lightBlue'
      }, {
        key: '2',
        property: '属性2',
        displayName: '显示名称2',
        sortable: false,
        dataFormat: '{0}%',
        displayStyle: "default",
        displayOrder: 2,
        fontStyle: 'lightBlue'
      }, {
        key: '3',
        property: '属性3',
        displayName: '显示名称3',
        sortable: false,
        dataFormat: '{0}%',
        displayStyle: "default",
        displayOrder: 3,
        fontStyle: 'lightBlue'
      }],
      //正在编辑数据的缓存以便取消动作
      editCacheData: [{
        key: '1',
        property: '属性1',
        displayName: '显示名称1',
        sortable: true,
        dataFormat: '{0}%',
        displayStyle: "default",
        displayOrder: 1,
        fontStyle: 'lightBlue'
      }, {
        key: '2',
        property: '属性2',
        displayName: '显示名称2',
        sortable: false,
        dataFormat: '{0}%',
        displayStyle: "default",
        displayOrder: 2,
        fontStyle: 'lightBlue'
      }]
    }
    this.columns = [{
      title: '属性/列',
      dataIndex: 'property',
    }, {
      title: '显示名称',
      dataIndex: 'displayName',
      render: (text, record) => {
        if (this.state.editCacheData.find(item => item.key == record.key)) {
          //编辑状态
          return <Input value={text} onChange={(e) => { this.textChange(e, record) }} />
        }
        return text
      }
    }, {
      title: '是否排序',
      dataIndex: 'sortable',
      render: (checked, record) => {
        if (this.state.editCacheData.find(item => item.key == record.key)) {
          //编辑状态
          return <Checkbox checked={checked} onChange={(e) => { this.checkedChange(e, record) }} />
        }
        return checked.toString();
      }
    }, {
      title: '数据格式',
      dataIndex: 'dataFormat',
    }, {
      title: '显示样式',
      dataIndex: 'displayStyle',
    }, {
      title: '显示顺序',
      dataIndex: 'displayOrder',
    }, {
      title: '字体样式',
      dataIndex: 'fontStyle',
    }, {
      title: '操作',
      key: 'action',
      render: (record) => {
        if (this.state.editCacheData.find(item => item.key == record.key)) {
          //编辑状态
          return <span>
            <a onClick={() => { this.okToDisplay(record) }}>更新</a>
            <span className="ant-divider" />
            <a onClick={() => { this.cancelToDisplay(record) }}>取消</a>
          </span>
        }
        //普通状态
        return <span>
          <a onClick={() => { this.changeToEdit(record) }}>编辑</a>
        </span>
      }
    }];
  }

  render() {
    return <div>
      <Table columns={this.columns} dataSource={this.state.data} pagination={false} />
    </div>
  }
}