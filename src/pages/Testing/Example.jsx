import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
const enString = {
  submit: 'Submit',
  cancel: 'Cancel'
}

const cnString = {
  submit: '提交',
  cancel: '取消'
}
// const {Provider,Consumer} = React.createContext(defaultValue)
// 当React渲染context组件的Consumer时，它会从组件树的上层中最接近的匹配的Provider读取当前的context值
// 如果上层的组件树没有一个匹配的provider,而此时你需要渲染一个Consumer组件，那么你可以用到defaultValue
// 这有助于在不封装它们的情况下对组件进行测试
const { Provider, Consumer } = React.createContext(enString)
class LocaleSample extends Component {
  state = {
    locale: enString
  }
  toggleLocale = () => {
    let { locale } = this.state
    locale = (locale === enString ? cnString : enString)
    this.setState({ locale })
  }
  render() {
    const { locale } = this.state
    // react组件允许Consumers订阅context的改变
    // 接受一个value属性，传递给Provider的后代Consumers.
    // 一个Provider可以联系到多个Consumers.Provider可以被嵌套以覆盖组件树内更深层次的值
    // <Provider value={/* some value */}>
    return (
      <Provider value={locale}>
        <Row>
          <Col>
            <Button type="primary" onClick={this.toggleLocale}>切换语言</Button>
          </Col>
          <LocaleButton />
        </Row>
      </Provider>

    );
  }
}
const LocaleButton = () => {
  // 接受一个函数作为子节点.函数接受当前context的值并返回一个react节点
  //  <Consumer>
  //   {context => /* render something based on the context value */}
  // </Consumer>
  return (
    <Consumer>
      {({ cancel, submit }) => {
        return (
          <Col>
            <Button type="primary">{submit}</Button>
            <Button type="primary">{cancel}</Button>
          </Col>
        )
      }}
    </Consumer>
  )
}
export default LocaleSample;