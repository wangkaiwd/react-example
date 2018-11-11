import React, { Component } from 'react';
// 定义一个公用的时间逻辑
const WithTime = (Wrapper) => {
  return class BaseClock extends Component {
    state = {
      time: new Date()
    }
    componentDidMount() {
      this.timerId = setInterval(() => {
        this.setState({ time: new Date() })
      }, 1000)
    }
    render() {
      return (
        <Wrapper time={this.state.time} />
      );
    }
  }
}
export default WithTime;
