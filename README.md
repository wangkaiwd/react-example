## `react-example`

### 项目配置
这里`webpack`的相关配置通过`craco`来进行更改。

说一下我不使用`eject`命令的原因：  
* `eject`使用之后会生成很多的配置文件，导致目录变多，影响简洁性
* 在执行`eject`命令之后，就要自己维护`webpack`的配置文件
* 当`create-react-app`升级了之后，我们想要跟进新版本，必须要重新配置相关的`webpack`配置

当然是用`eject`也有一些好处：  
* 可以直接参考`webpack`官方文档进行配置，语法没有进行二次封装
* 可以很好的契合`webstorm`进行配置项的识别

#### 项目`webpack`相关
1. 使用`craco`来避免`eject`造成的配置不易维护问题
2. 使用`craco-antd`来通过`craco`配置`ant design`
3. [简单的`craco`配置`demo`](https://github.com/sharegate/craco/blob/master/packages/craco/README.md#configuration-overview)
4. 安装`node-sass`来执行`scss`
5. 通过`react-create-app`自带的`@import-normalize`进行不同浏览器间`css`文件的兼容
6. 自己添加`reset.scss`文件来重置一些标签的默认样式
7. 通过`craco.config.js`的`alias`设置文件别名

#### `craco`存在的一些问题
在使用一些第三方库的时候，我们总是会碰到一些问题，使自己不太满意。而`craco`在自己使用过程中存在如下问题：  
1. 没有找到配置`extensions`的方法，导致`.scss`文件必须要加扩展名
   * 找到解决方法：通过`webpack`的`configure`属性来进行自定义
2. 无法通过`webstorm`识别对应的`webpack`文件，导致配置的别名无法通过快捷键进行完美的跳转
   * 找到解决方法：可以配置一个假的`webpack.config.js`配置文件，然后通过`webstorm`进行导入

### `react`文档阅读
#### `JSX`简介
* `jsx`是一个表达式：  
  1. 可以在`if`语句和`for`循环的代码块中使用`jsx`
  2. 将`jsx`赋值给变量
  3. 把`jsx`当做参数传入
  4. 从函数中返回`jsx`
  
* `jsx`表示对象：  
  1. 以下俩种示例代码完全等效：
  ```jsx harmony
  const element = <h1 className={'greeting'}>Hello world</h1>
  // bel将jsx进行了转译
  const element = React.createElement(
    'h1',
    {calssName: 'greeting'},
    'Hello world'
  )

  // console.log(element)
  // 简化的输出
  const element = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello world'
    }
  }
  ```
#### 元素渲染
> 元素是构成`React`应用的最小砖块
* `React`组件是由元素构成的
* `React DOM`会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使`DOM`达到预期的状态。

#### 组件&`props`
* 当`React`元素为用户自定义组件时，它会将`JSX`所接收的属性(`attibute`)转换为单个对象传递给组件，这个对象被称之为`props`
* 组件名称必须以大写字母开头，`React`会将以小写字母开头的组件视为原生`DOM`标签
* 所有`React`组件都必须像纯函数一样保护它们的`props`不被更改

#### `state` & 生命周期
* `state`与`props`类似，但是`state`是私有的，并且完全受控于当前组件
* 尽管`this.state`和`this.props`是`React`本身设置的，且都拥有特殊的含义，但是其实你可以向`class`中随意添加不参与数据流（比如计时器ID）的额外字段  
  ```jsx harmony
  componentDidMount() {
    this.timerId = setInterval(
      ()=> // doSomething...,
      1000
    )
  }
  ```
* 关于`setState`你应该了解三件事：  
  1. 不要直接修改`state`
  2. `state`的更新可能是异步的
      ```jsx harmony
      // 正确的获取更新后state和props方式：
      // 最新的state和props
      this.setState((state,props) => ({
         counter: state.counter + props.increment
      }))
      ```
  3. `state`的更新会被合并

#### 事件处理
* `React`你不能通过返回`false`的方式阻止默认行为。你必须显示的使用`preventDefault`
* 绑定`this`时推荐使用`public class fields`语法，在`Create React App`中默认启用该语法
  ```jsx harmony
  handleClick = () => {
    console.log('this is:',this)
  }
  ```
#### 条件渲染
* `react`条件渲染的实现方式：
  1. 与运算符 `&&`
      ```text
      expr1 && expr2  => 若expr1可转换为true,则返回expr2;否则返回expr1
      expr1 || expr2 => 若expr1可转换为true，则返回expr1;否则返回expr2
      ```
  2. 三目运算符
  3. `if`运算符
  
* 阻止条件渲染
  ```jsx harmony
  // 让render组件直接返回null，而不进行任何渲染
  if(!props.warn) {
    return null
  }
  ```
  
#### 列表 & key
* 一个元素的`key`最好是这个元素在列表中拥有的一个独一无二的字符串
* 万不得已我们可以使用元素索引index作为key,因为这样做会导致性能变差，还可能能引起组件状态的问题
* `key`只是在兄弟节点之间应该是独一无二的，它们不需要是全局唯一。当我们生成俩个不同的数组时，我们可以使用相同的`key`。
* `key`会传递信息给`React`,但不会传递给你的组件。

#### 表单
* 受控组件： 渲染表单的`React`组件还控制着用户输入过程中表单发生的操作
* 对于受控组件来说，每个`state`突变都有一个相关的处理函数。这使得修改或验证用户输入变得简单
* 受控组件输入空值：将`value`设置为`undefined`或`null`,组件将不再受控

#### 状态提升
> 通常，多个组件需要反映相同的数据变化，这时我们建议将共享状态提升到最近的共同父组件中去。

* 在`React`应用中，任何可变数据应当只有一个相对应的唯一数据源。
* 通常，`state`都是首先添加到需要渲染数据的组件中去。然后，如果其它组件也需要这个`state`，那么你可以将它提升至这些组件的最近共同父组件中。**你应当依靠自上而下的数据流，而不是尝试在不同组件间同步`state`**
* 如果某些数据可以由`props`或`state`推导得出，那么它就不应该存在于`state`中

#### 组合和继承
* `React`有十分强大的组合模式。我们推荐使用组合而非继承来实现组件间的代码重用
* `React`通过`props.children`的形式实现默认插槽，而当你有许多插槽的时候，可以通过`props`来进行传递：  
  ```jsx harmony
  // 使用
  <SplitPane left={<Contacts />} right={<Chat />}/>
  // 实现
  const SplitPane = (props) => {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    )
  }
  ```
* 这里的继承到底指什么并没有明白

#### 代码分割
* 在你的代码中引入代码分割的最佳方式是通过动态`import()`语法
* `React.lazy`函数能让你像渲染常规组件一样处理动态引入(的组件)
* `React.lazy`接受一个函数，这个函数需要动态调用`import()`。它必须返回一个`Promise`，该`Promise`需要`resolve`一个`default export`的`React`组件
  ```jsx harmony
  const OtherComponent = React.lazy(() => import('./OtherComponent'))
  ```
* `React.lazy`目前只支持默认导出(`default exports`)。如果你想被引入的模块使用命名导出(`named exports`)，你可以创建一个中间模块，来重新导出为默认模块
