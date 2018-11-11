import React, { Component } from 'react';
import { Row, Col } from 'antd';
import PropTypes from "prop-types";
import styles from './advancedTabSelector.less'

class AdvancedTabSelector extends Component {
  static propTypes = {
    // 调用组件时要传入的一个配置项，可以给定一个默认值
    options: PropTypes.array.isRequired,
    // 通过元素控制selector的选中项，这种写方便父元素设置默认选中项，或者通过父组件直接改变选中项
    // 否则没有办法来改变当前的选中项，这个api是根据需求来的
    // 如果需求可能通过父元素直接改变子元素的某项为选中项，要将该api暴露，否则交由子组件内部维护即可
    value: PropTypes.string.isRequired,
    // 在值进行改变的时候要通知父元素，并将父元素要获取到的值传给父元素
    onChange: PropTypes.func.isRequired,
    // 也可以通过PropTypes来设置children的类型
    children: PropTypes.func.isRequired
  }
  findCurrentIndex = () => {
    const { options } = this.props
    const { currentValue } = this.state
    return options.findIndex(item => item.value === currentValue)
  }
  onChange = (option) => {
    // this.setState({ currentValue: option.value })
  }
  render() {
    const { options, onChange, value } = this.props
    const unit = 16 / (options.length + 1)
    return (
      <Row className={styles.tabSelector}>
        <Col className={styles.title} span={unit}>升级selector:</Col>
        {options.map((option, i) => (
          // className中并不会将Null,Undefined,true,false忽略、
          <Col
            key={i}
            className={`${styles.item} ${(option.value === value) ? styles.active : ''}`}
            span={unit}
            onClick={() => onChange(option.value)}
          >
            {option.value}
          </Col>
        ))}
        <Col span={16} offset={5}>
          {value && this.props.children(value)}
        </Col>
      </Row>
    );
  }
}

class UseSelector extends Component {
  state = {
    value: '',
    value2: ''
  }
  options = [
    { label: '红色', value: 'red' },
    { label: '蓝色', value: 'blue' },
    { label: '黑色', value: 'black' }
  ]
  options2 = [
    { label: '老虎', value: 'tiger' },
    { label: '大象', value: 'elephant' },
    { label: '牛', value: 'cow' },
  ]
  // 需求，获取当前选中的颜色
  createSquare = (value) => {
    console.log(`当前颜色${value}`)
    return (
      <div className={styles.square} style={
        { backgroundColor: `${value}` }
      } />
    )
  }
  createAnimal = (value) => {
    return (
      <img width="100px" src={require(`../../../images/${value}.png`)} alt="" />
    )
  }
  onChange = (value) => {
    this.setState({ value })
  }
  onChange2 = (value) => {
    this.setState({ value2: value })
  }
  render() {
    return (
      <div>
        <AdvancedTabSelector value={this.state.value} onChange={this.onChange} options={this.options} >
          {/* 根据索引来控制 */}
          {/* <div>tab1</div>
          <div>tab2</div>
          <div>tab3</div> */}
          {this.createSquare}
        </AdvancedTabSelector>
        <AdvancedTabSelector value={this.state.value2} onChange={this.onChange2} options={this.options2} >
          {/* 根据索引来控制 */}
          {/* <div>tab1</div>
          <div>tab2</div>
          <div>tab3</div> */}
          {this.createAnimal}
        </AdvancedTabSelector>
      </div>
    )
  }
}
export default UseSelector;

// <AdvancedTabSelector 
//  onChange={}
//  options=[]
// />
