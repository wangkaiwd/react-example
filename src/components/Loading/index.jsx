import React, { Component } from 'react';
import { Skeleton } from 'antd';
class Loading extends Component {
  render() {
    return (
      <Skeleton active />
    );
  }
}

export default Loading;