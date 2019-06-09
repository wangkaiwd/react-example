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
