import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import './TabSelector.scss';

/**
 * 组件设计时的几个考虑：
 *  1. 为什么要将selected通过props传入，而不是通过内部的state来进行控制
 *      如果通过state来控制的话，用户并不能修改初始时选中项，这在用户不关心内部的选中项，只是关心点击后选中内容的时候可以使用。
 *      而如果用户要完全控制选中项的时候：比如初始时选中最后一项，我们就需要通过`props`来将`state`进行传入
 *  2. 为什么要还传入一个onChange函数
 *      onChange函数的作用：
 *        1. 暴露一个api：让用户可以在tab切换的时候做一些事情
 *        2. 由于传入的props不能修改，我们需要将最新的值通过回调函数的参数传回来，然后通过this.setState()进行修改，
 *           之后再render的时候就会将最新的props传入
 */
class TabSelector extends Component {
  itemClasses = (option) => {
    const { selected } = this.props;
    const isSelect = option.key === selected;
    return isSelect ? 'tab-selector-item selected' : 'tab-selector-item';
  };
  render () {
    const { options, onChange } = this.props;
    return (
      <div className={'tab-selector'}>
        <div className={'label'}>
          TabSelector:
        </div>
        <Row type={'flex'} gutter={24} className={'tab-selector-item-wrapper'}>
          {options.map(option => (
            <Col
              key={option.key}
              className={this.itemClasses(option)}
              onClick={() => onChange(option.key)}
            >
              {option.title}
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
TabSelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.string,
  onChange: PropTypes.func
};
TabSelector.defaultProps = {
  options: [],
  selected: '',
  onChange: () => {}
};
class TabSelectorSample extends Component {
  state = {
    selected: 'blue'
  };
  options = [
    { key: 'red', title: 'Red' },
    { key: 'blue', title: 'Blue' },
    { key: 'orange', title: 'Orange' }
  ];
  onChange = (selected) => {
    this.setState({ selected });
  };
  render () {
    const { selected } = this.state;
    return (
      <TabSelector
        options={this.options}
        selected={selected}
        onChange={this.onChange}
      />
    );
  }
}
export default TabSelectorSample;
