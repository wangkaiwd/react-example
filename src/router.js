import { HashRouter as Router, Route } from 'react-router-dom'
import React, { lazy } from 'react'
import App from './App'
import Chat from '@/pages/Chat'
import FormAntd from '@/pages/FormHandle/FormSubmitAntd'
import Jsx from '@/pages/Jsx'
import FieldsSet from '@/pages/FormHandle/AntdForm'

export default () => (
  <Router>
    <App>
      <Route path="/chat" component={Chat}/>
      <Route path="/formAntd" component={FormAntd}/>
      <Route path="/jsx" component={Jsx}/>
      <Route path="/fieldsSet" component={FieldsSet}/>
      {/*<Route path="/chat" component={Chat}/>*/}
    </App>
  </Router>
)