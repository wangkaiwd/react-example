import React, { Component } from 'react';
import { Statistic } from 'antd';

class Clock extends Component {
  state = {
    date: new Date()
  };
  timerId = null;

  componentDidMount () {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount () {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  render () {
    const { date } = this.state;
    return (
      <div className={'app-clock'}>
        <Statistic title="Clock" value={date.toLocaleTimeString()}/>
      </div>
    );
  }
}
export default Clock;
