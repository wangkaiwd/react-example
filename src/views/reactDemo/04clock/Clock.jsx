import React, { Component } from 'react';
import { Statistic } from 'antd';

class Clock extends Component {
  state = {
    date: new Date()
  };
  timerId = null;

  componentDidMount () {
    console.log('Clock did mount');
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount () {
    console.log('Clock did unmount');
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  componentDidUpdate () {
    console.log('Clock did update');
  }

  render () {
    console.log('Clock render');
    const { date } = this.state;
    return (
      <div className={'app-clock'}>
        <Statistic title="Clock" value={date.toLocaleTimeString()}/>
      </div>
    );
  }
}
export default Clock;
