import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
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
  componentDidMount() {
    console.log('localeButton1', this.localeButton1)
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
          <LocaleButton
            // 通过函数来获取子组件实例
            getInstance={(localeButton1) => this.localeButton1 = localeButton1}
          // ref={(button) => this.localeButton = button}
          // 这样不仅无法获取到子组件实例，而且还会报错：
          // function components cannot be given refs. Attemps to access this ref will fail
          // 函数组件不能设置refs,企图使用ref将失败
          />
        </Row>
      </Provider>

    );
  }
}

@withRouter
class LocaleButton extends Component {
  refFunc = () => {
    console.log('refFunc')
  }
  componentDidMount = () => {
    this.props.getInstance(this)
  }
  render() {
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
}

export default LocaleSample;
// react中通过ref获取子组件实例存在的问题：
//      1. 如果组件是普通组件的话，可以直接获取到
//      2. 如果组件是用HOCs包装过的话，获取的实例是包装组件，并不是子组件
//            解决方法：父组件通过props传入一个函数到子组件，子组件调用函数，并将子组件的this传给父组件
//                    之后父组件在子组件执行函数的时候将传来的参数挂载到自己的实例this上，这样就可以获取到子组件的方法和属性并能直接调用