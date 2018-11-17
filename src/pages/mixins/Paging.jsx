import React, { Component } from 'react';

// TODO: pageKey的totalCount有一些问题需要进行出里，pageChange和pageSizeChange要实现具体的逻辑

// 高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件
const Paging = (Wrapper) => {
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
export default Paging;

// 高阶组件的应用场景： 
//    实现一些通用的逻辑被不同的组件使用，但是它自身并不包含任何ui的展现
