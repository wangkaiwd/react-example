import React from 'react'
import ReactDOM from 'react-dom'
import RouterConfig from './router'
// PWA  progressive web application
// 奖项目部署到支持https协议的服务器上，会在断网的时候提供离线访问
import registerServiceWorker from './registerServiceWorker'
import 'styles/reset.less'
import 'styles/container.less'
// ReactDOM.render(element,container,[callback])
// 渲染一个React元素，添加到位于提供的container里的DOM元素中，并返回这个组件的一个引用
// 如果这个React元素之前已经被渲染到container里去了，这段代码就会进行一次更新，并且只会改变那些反应元素最新状态所必须的DOM元素
// 回调函数时可选的。如果你提供了，程序会在渲染或更新之后执行这个函数
ReactDOM.render(<RouterConfig />, document.getElementById('root'))
registerServiceWorker()
