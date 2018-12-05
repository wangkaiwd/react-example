import React, { Component } from 'react';
import { Spin } from 'antd';
import styles from './index.less'
class Loading extends Component {
  render() {
    return (
      <div className={styles.routerLoading}>
        <Spin />
      </div>
    );
  }
}

export default Loading;
