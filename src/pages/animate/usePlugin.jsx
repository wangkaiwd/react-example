import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button } from 'antd';
import styles from './usePlugin.less'
// react-transition-group官方issue回答：https://github.com/reactjs/react-transition-group/issues/167
// 如何结合css-modules来实现动画
// 通过添加:global的方式在全局写入动画，会出现入场的淡入淡出动画不生效
class UsePlugin extends Component {
  state = {
    visible: true,
    list: ['item', 'item']
  }
  addItem = () => {
    this.setState((state) => ({ list: [...state.list, 'item'] }))
  }
  deleteItem = () => {
    this.setState((state) => ({ list: state.list.slice(0, -1) }))
  }
  render() {
    const { list } = this.state
    return (
      <div>
        <TransitionGroup>
          {list.map((item, i) => {
            return (
              <CSSTransition
                classNames={{
                  enter: styles['fade-enter'],
                  enterActive: styles['fade-enter-active'],
                  enterDone: styles['fade-enter-done'],
                  exit: styles['fade-exit'],
                  exitActive: styles['fade-exit-active'],
                  exitDone: styles['fade-exit-done']
                }}
                timeout={3000}
              >
                <h2 className={styles.hello}>{item}</h2>
              </CSSTransition>
            )
          })}

        </TransitionGroup>
        <Button
          type="primary"
          onClick={this.addItem}
        >
          新增
        </Button>
        <Button
          type="primary"
          onClick={this.deleteItem}
        >
          删除
        </Button>
      </div>
    );
  }
}

export default UsePlugin;
