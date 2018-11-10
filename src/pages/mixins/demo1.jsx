import React, { Component } from 'react';

// 高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件
const PopupContainer = (Wrapper) => {
  return class WrapperComponent extends Component {
    state = {

    }
    pageKey = {
      pageSize: 10,
      pageIndex: 1,
      totalCount: 100
    }
    pageChange = (page, pageSize) => {
      console.log('改变页数');
    }
    pageSizeChange = (current, size) => {
      console.log('每页条数改变')
    }
    showTotal = (total) => `Total ${total} items`
    pageOptions = {
      total: this.pageKey.totalCount,
      onChange: (page, pageSize) => this.pageChange(page, pageSize),
      onShowSizeChange: (current, size) => this.pageSizeChange(current, size),
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: this.showTotal,
    }
    render() {
      return (
        <Wrapper
          pageKey={this.pageKey}
          pageOptions={this.pageOptions}
        />
      )
    }
  }
}
export default PopupContainer;