import React, { Component } from 'react';
import { Collapse } from 'antd'
const Panel = Collapse.Panel;
class ErrorBoundary extends Component {
  state = {
    error: '',
    errorInfo: ''
  }
  componentDidCatch(error, errorInfo) {
    // 这里的error是js中的错误对象，要通过对象的方法来获取错误信息
    // console.log('type', typeof error) // 'object'
    console.log(error)
    this.setState({ error, errorInfo })
  }
  render() {
    const { errorInfo, error } = this.state
    if (this.state.errorInfo) {
      return (
        <Collapse>
          <Panel header="点击查看错误详情" key="1">
            <p>{errorInfo.componentStack}</p>
            <hr />
            <p>{error.message}</p>
          </Panel>
        </Collapse>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary;