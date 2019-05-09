import React, { Component } from 'react'
import { Button, Col, Input, message, Row, List, Card } from 'antd'
import WithTime from '@/pages/Clock/BaseClock'
import withButton from '@/decorator/AuthButton'
const AuthButton = withButton(Button)
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
              时间展示
            </Card>
          </Col>
        </Row>
        <AuthButton type="primary">权限按钮1</AuthButton>
        <AuthButton type="danger" auth={false}>权限按钮2</AuthButton>
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

// 修饰器函数：用来修改类的行为

function testable(target) { // target是MyTestableClass类本身
  target.isTestable = true
}
@testable
class MyTestableClass {

}
console.log(MyTestableClass.isTestable)

// 修饰器的行为
// @decorator
// class A {}
// // 等同于
// class A {}
// // 在包装函数对类没有相关操作的时候，还是返回A
// A = decorator(A) || A
// 修饰器的第一个参数，就是所要修饰的目标类

// 比较复杂的装饰器
// 装饰器可以接收参数
// 要传其它参数的时候，可以再修饰器外面再封装一层函数
function testable1(isTestable) {
  return function (target) {
    target.isTestable = isTestable
  }
}
// 默认会将target当前修饰的类作为第一个参数
@testable1(111)
class MyTestableClass1 {

}
console.log(MyTestableClass1.isTestable)



// 修饰器对类的行为的改变是在代码编译时发生的，而不是在运行时。本质：编译时执行的函数
// 通过修饰器对类添加实例属性
function testable2(target) {
  target.prototype.isTestable = true
}
@testable2
class MyTestableClass2 {

}
const obj = new MyTestableClass2()
console.log(obj.isTestable)


function mixins(...list) {
  return function (target) {
    // Object.assign: 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象
    // Objec.assign(target,...sources)
    // target: 目标对象，sources:源对象， 返回值：目标对象

    // 将传入的参数复制到target.prototype,即对应被修饰类的原型上
    Object.assign(target.prototype, ...list)
  }
}
const Foo = {
  foo() {
    console.log('foo')
  }
}
@mixins(Foo)
class MyClass { }
const obj1 = new MyClass()
obj1.foo()
// 修饰器不能用于函数，因为存在函数提升