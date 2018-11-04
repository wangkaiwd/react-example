import React, { Component } from 'react'
import { Card } from 'antd'

const A = () => <h3>我是A</h3>
const B = () => <h2>我是B,我和A不一样</h2>
const obj = {
  demo1: A,
  demo2: B
}
const array = []
const array1 = [1, 2, 3]

class Jsx extends Component {
  state = {
    str: '<' + 'Foo' + '/>',
    Content: A,
    hh: A
  }

  render () {
    const {Content, hh} = this.state
    return (
      <div>
        <Card title="深入学习JSX">
          <h2>
            本质上来讲，JSX只是为React.createElement(component,props,...children)方法提供的语法糖
          </h2>
          {/*<MyButton color="blue" shadowSize="2">Click Me</MyButton>*/}
          {/*编译为
          React.createElement(
          MyButton,
          {color: 'bule',shadowSize:'2'},
          'Click Me'
          )*/}
          JSX的标签名决定了React元素的类型。大写开头的JSX标签标示一个React组件。这些标签将会被编译为同名变量并被引用
          如果使用{this.state.str}表达式，则必须在作用域中先声明`Foo`变量

        </Card>
        <Card title={'react必须声明'}>
          由于JSX编译后会调用React.createElement方法，所以你的JSX代码中必须首先声明React变量
        </Card>
        当元素类型以小写字母开头时，它表示一个内置的组件。如`
        <div></div>
        `或`<span></span>`，并将字符串`div`或`span`传递给
        React.createElement()
        <Card title={'demo'}>
          {/*组件名必须要用大写，否则会被默认为是内置标签字符串*/}
          <Content/>
          {/*以点的形式命名，可以使用小写，但推荐还是以大写开头*/}
          <obj.demo2/>

          {/*以小写命名组件会被认为是内置标签，浏览器会报错提醒*/}
          {/*<hh/>*/}

          总结：只能通过大写变量和对象属性(点.)的形式定义React组件
        </Card>
        <Card>
          布尔值、Null和Undefined被忽略
          {true}
          这在根据条件来确定是否渲染React元素时非常有用

          一个常见的错误
          <h4>
            {array.length && 234}
          </h4>
          要确保&&前面的表达式始终为布尔值<br/>
          {array1.length > 0 && 234}
        </Card>
      </div>
    )
  }
}

export default Jsx