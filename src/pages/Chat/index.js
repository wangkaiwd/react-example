import React, { Component } from 'react'
import { Button, Col, Input, message, Row, List, Card } from 'antd'
import WithTime from '@/pages/Clock/BaseClock'
function MessageList(props) {
  return (
    <List
      dataSource={props.messages}
      bordered
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  )
}

class Chat extends Component {
  state = {
    messages: [],
    inputMsg: '',
    input2Msg: ''
  }
  onChange = (e) => {
    const inputMsg = e.target.value
    this.setState({ inputMsg })
  }
  onClick = () => {
    const { inputMsg, messages } = this.state
    if (inputMsg.trim() === '') return message.warn('请输入内容')
    messages.push(inputMsg)
    this.setState({ messages, inputMsg: '' })
  }
  handleClick = () => {
    console.log('value', this.input.value)
    // e.target.value = ''
    this.input.value = ''
  }
  render() {
    // 双向绑定原理： 1. value: inputMsg 2. onChange={this.onChange}
    // 1. 可在更改inputMsg的时候动态更改value值
    // 2. 在更改value值的时候更新inputMsg
    // react的onChange事件在浏览器中的表现和这个名字不相称，而react通过onChange对用户输入的实时响应处理
    const { inputMsg, messages } = this.state

    return (
      <div>
        <Row>
          <Col span={8}>
            <MessageList messages={messages} />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            {/* 受控组件 */}
            <Input
              type="text"
              value={inputMsg}
              placeholder="请输入内容"
              onChange={this.onChange}
            />
          </Col>
          <Col span={2}><Button style={{ width: '100%' }} type="primary" onClick={this.onClick}>确认</Button></Col>
        </Row>
        <Row>
          <Col span={8}>
            {/* 通过DOM操作来获取表单的输入值 */}
            <input placeholder="非受控组件" ref={(input) => this.input = input} type="text" />
            <button onClick={this.handleClick}>按钮</button>
            <Card title={this.props.time.toLocaleTimeString()}>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default WithTime(Chat)
// 受控组件和非受控组件
//    受控组件：
//       在HTML中，<input>,<textarea></textarea>和<select></select>这类表单元素会维持自身状态，
//       并根据用户输入进行更新。
//      在react中，可变的状态通常保存在组件的状态属性中，并且只能用setState方法进行更新
//   受控组件：值由React控制的输入表单元素称为“受控组件”

//   非受控组件： 使用ref从DOM获取表单值
//  大多数情况下推荐使用受控组件来实现表单
