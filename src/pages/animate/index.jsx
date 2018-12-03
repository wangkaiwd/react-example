import React, { Component } from 'react';
import { Button } from 'antd'
import styles from './index.less';

class Animate extends Component {
  state = {
    visible: true,
    visible2: true
  }
  classNames = (visible) => {
    return `${styles.hello} ${visible ? styles.show : styles.hide}`
  }
  classNames2 = (visible2) => {
    return `${styles.hello} ${visible2 ? styles.show2 : styles.hide2}`
  }
  handleToggle = () => {
    const { visible } = this.state
    this.setState({ visible: !visible })
  }
  render() {
    const { visible, visible2 } = this.state
    return (
      <div className={styles.wrapper}>
        <div className={this.classNames(visible)}>hello</div>
        <Button type="primary" onClick={this.handleToggle}>toggle</Button>
        <div className={this.classNames2(visible2)}>hello2</div>
        <Button
          type="danger"
          onClick={() => { this.setState({ visible2: !visible2 }) }}>
          toggle2
        </Button>
      </div>
    );
  }
}

export default Animate; <div>hello</div>
