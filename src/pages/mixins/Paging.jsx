import React, { Component } from 'react';
// 高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件
const Paging = (Wrapper) => {
  return class WrapperComponent extends Component {
    state = {
      pageKey: {
        pageSize: 10,
        pageIndex: 1,
        totalCount: 100,
      }
    }
    pageKey = {
      pageSize: 10,
      pageIndex: 1,
      totalCount: 100,
    }
    // 页数改变
    pageChange = (page, pageSize) => {
      const { pageKey } = this.state;
      pageKey.pageIndex = page;
      this.setState({ pageKey })
    }
    // 每页条数改变
    pageSizeChange = (current, size) => {
      const { pageKey } = this.state;
      pageKey.pageIndex = 1;
      pageKey.pageSize = size;
      this.setState({ pageKey })
    }
    // 重置分页条件
    resetPageKey = () => {
      this.setState({ pageKey: this.pageKey })
    }
    showTotal = (total) => `Total ${total} items`
    // 这里使用函数和变量的区别： 
    //    函数会每次重新执行，来获取最新的一个
    //    变量不会每次

    // 正确方法
    pageOptions = () => {
      const { pageIndex, totalCount } = this.state.pageKey
      return {
        current: pageIndex,
        total: totalCount,
        onChange: (page, pageSize) => this.pageChange(page, pageSize),
        onShowSizeChange: (current, size) => this.pageSizeChange(current, size),
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: () => this.showTotal(totalCount),
      }
    }
    // 错误方法: 这里会直接赋值，而不是地址
    // pageOptions = {
    //   current: this.pageKey.pageIndex,
    //   total: this.pageKey.totalCount,
    //   onChange: (page, pageSize) => this.pageChange(page, pageSize),
    //   onShowSizeChange: (current, size) => this.pageSizeChange(current, size),
    //   showSizeChanger: true,
    //   showQuickJumper: true,
    //   showTotal: this.showTotal,
    // }
    render() {
      return (
        <Wrapper
          resetPageKey={this.resetPageKey}
          pageKey={this.state.pageKey}
          {...this.props}
          pageOptions={this.pageOptions}
        />
      )
    }
  }
}
export default Paging;

// 高阶组件的应用场景： 
//    实现一些通用的逻辑被不同的组件使用，但是它自身并不包含任何ui的展现
