import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import styles from './index.less';
// child： react元素，container: dom元素
// ReactDOM.createPortal(child, container);
class PortalSample extends Component {
  state = {
    visible: false
  };
  renderButton = () => (
    <Button type="primary" onClick={() => this.setState({ visible: true })}>
      打开对话框
    </Button>
  );
  renderDialog = () => (
    <div className={styles['portal-dialog']}>
      <div className={styles.content}>
        <div className={styles.title}>这是一个对话框</div>
        <div className={styles.footer}>
          <Button
            type="primary"
            onClick={() => this.setState({ visible: false })}
          >
            关闭对话框
          </Button>
        </div>
      </div>
    </div>
  );
  render() {
    const { visible } = this.state;
    if (!visible) {
      return this.renderButton();
    }
    // child: react元素，container: DOM元素
    // ReactDOM.createPortal(child,container)
    return ReactDOM.createPortal(this.renderDialog(), document.body);
  }
}

export default PortalSample;
