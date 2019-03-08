import React, { Component } from 'react';
import {
  Form, Input, Select, Button,
} from 'antd';

const { Option } = Select;

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