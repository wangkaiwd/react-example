import React, { Component } from 'react'
import { Button, Col, Input, List, Row, message } from 'antd'
import styles from './App.less'
import { Link, HashRouter as Router } from 'react-router-dom'

function MessageList (props) {
  return (
    <List
      dataSource={props.messages}
      bordered
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  )
}

class App extends Component {
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
      <Router>
        <div className={styles.app}>
          <div className={styles['left-nav']}>
            <ul>
              <Link to='/chat'>
                <li>内容符1</li>
              </Link>
              <li>内容符2</li>
              <li>内容符3</li>
              <li>内容符4</li>
              <li>内容符5</li>
              <li>内容符6</li>
              <li>内容符7</li>
              <li>内容符8</li>
              <li>内容符9</li>
              <li>内容符10</li>
            </ul>
          </div>
          <div className={styles.content}>
            <Row type="flex" align="middle" justify="center">
              <Col span={8}>
                <MessageList messages={messages}/>
              </Col>
            </Row>
            <Row type="flex" align="middle" justify="center">
              <Col span={6}>
                <Input
                  type="text"
                  value={inputMsg}
                  placeholder="请输入内容"
                  onChange={this.onChange}
                />
              </Col>
              <Col span={2}><Button type="primary" onClick={this.onClick}>确认</Button></Col>
            </Row>
          </div>
        </div>
      </Router>
    )
  }
}

export default App