import React from 'react'
import ReactDOM from 'react-dom'
import RouterConfig from './router'
import registerServiceWorker from './registerServiceWorker'
import 'styles/reset.less'
import 'styles/container.less'

ReactDOM.render(<RouterConfig/>, document.getElementById('root'))
registerServiceWorker()
