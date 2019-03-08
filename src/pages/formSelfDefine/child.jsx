import React, { Component } from 'react';
import {
  Form, Input, Select, Button,
} from 'antd';

const { Option } = Select;

// 自定义组件思路：
//  1. 当改变组件中输入内容的时候，会通过当前的onChange事件触发组件传来的onChange方法
//  2. onChange方法会改变form组件传来的value属性，在父组件传来的props发生改变的时候，会触发getDerivedStateFromProps函数
//  3. getDerivedStateFromProps函数会根据传来的props中的value属性来更新state
//  4. 自组件中根据props.value属性生成的state来更新状态
class Child extends Component {
  // static getDerivedStateFromProps(props,state)
  // 可以通过传来的props更新当前组件的state
  static getDerivedStateFromProps (nextProps) {
    console.log('next', nextProps);
    // Should be a controlled component.
    if ('value' in nextProps) {
      return {
        number: nextProps.value || 0,
      };
    }
    return null;
  }

  constructor (props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  handleNumberChange = (e) => {
    const number = parseInt(e.target.value || 0, 10);
    if (Number.isNaN(number)) {
      return;
    }
    // if (!('value' in this.props)) {
    //   this.setState({ number });
    // }
    this.triggerChange(number);
  };

  handleCurrencyChange = (currency) => {
    // if (!('value' in this.props)) {
    //   this.setState({ currency });
    // }
    this.triggerChange({ currency });
  };
  triggerChange = (changedValue) => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(changedValue);
    }
  };

  render () {
    const { size } = this.props;
    const state = this.state;
    return (
      <span>
        <Input
          type="text"
          size={size}
          value={state.number}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <Button>哈哈</Button>
      </span>
    );
  }
}

export default Child;