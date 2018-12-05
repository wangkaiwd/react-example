import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button } from 'antd';
import styles from './usePlugin.less'
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
                classNames="fade"
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
