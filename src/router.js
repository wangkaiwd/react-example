import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import App from './App'
import Chat from '@/pages/Chat'

export default () => (
  <Router>
    <App>
      <Route path="/chat" component={Chat}/>
      {/*<Route path="/chat" component={Chat}/>
      <Route path="/chat" component={Chat}/>
      <Route path="/chat" component={Chat}/>*/}
    </App>
  </Router>
)