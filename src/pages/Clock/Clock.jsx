import React, { Component } from 'react';
class Clock extends Component {
  state = {
    date: new Date()
  }
  componentDidMount() {
    console.log('组件挂载完成');
    this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000)
  }
  componentDidUpdate() {
    console.log('组件更新');
  }
  componentWillUnmount() {
    console.log('组件即将卸载');
    clearInterval(this.timerId)
  }
  render() {
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
export default Clock;
