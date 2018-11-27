import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import styles from './index.less';
// 插槽：portals
// Portals提供了一种很好的方法，将子节点渲染到父组件DOM层次结构之外的DOM节点
// child： 任何可渲染的react子元素， 如一个元素，字符串或片段(fragment)
// container: dom元素
// ReactDOM.createPortal(child, container);
// 典型用例： 当父组件有overflow: hidden或z-index样式，但你需要子组件能够在视觉上跳出其容器。例如，对话框、hovercards以及提示框
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
    return ReactDOM.createPortal(this.renderDialog(), document.body);
  }
}

export default PortalSample;
