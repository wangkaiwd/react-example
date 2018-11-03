import React, { Component } from 'react'
import { Button, Col, Input, message, Row, List } from 'antd'

function MessageList (props) {
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
    inputMsg: ''
  }
  onChange = (e) => {
    const inputMsg = e.target.value
    this.setState({inputMsg})
  }
  onClick = () => {
    const {inputMsg, messages} = this.state
    if (inputMsg.trim() === '') return message.warn('请输入内容')
    messages.push(inputMsg)
    this.setState({messages, inputMsg: ''})
  }

  render () {
    // 双向绑定原理： 1. value: inputMsg 2. onChange={this.onChange}
    // 1. 可在更改inputMsg的时候动态更改value值
    // 2. 在更改value值的时候更新inputMsg
    // react的onChange事件在浏览器中的表现和这个名字不相称，而react通过onChange对用户输入的实时响应处理
    const {inputMsg, messages} = this.state
    return (
      <div>
        <Row>
          <Col span={8}>
            <MessageList messages={messages}/>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Input
              type="text"
              value={inputMsg}
              placeholder="请输入内容"
              onChange={this.onChange}
            />
          </Col>
          <Col span={2}><Button style={{width: '100%'}} type="primary" onClick={this.onClick}>确认</Button></Col>
        </Row>
      </div>
    )
  }
}

export default Chat