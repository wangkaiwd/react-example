import { HashRouter as Router, Route } from 'react-router-dom'
import React, { lazy } from 'react'
import App from './App'
import Chat from '@/pages/Chat'
import FormAntd from '@/pages/FormHandle/FormSubmitAntd'
import Jsx from '@/pages/Jsx'
import FieldsSet from '@/pages/FormHandle/AntdForm'
import TabSelector from '@/pages/tabSelect/tabSelector'
import FormNest from '@/pages/FormNest/parent'
import Mixins from '@/pages/mixins/myComponents'
import Comment from '@/pages/comment/commentBox'
import Clock from '@/pages/Clock/Clock'
import AdancedTabSelector from "@/pages/FuncChild/AdvancedTabSelector";
export default () => (
  <Router>
    <App>
      <Route path="/chat" component={Chat} />
      <Route path="/formAntd" component={FormAntd} />
      <Route path="/jsx" component={Jsx} />
      <Route path="/fieldsSet" component={FieldsSet} />
      <Route path="/tabSelector" component={TabSelector} />
      <Route path="/formNest" component={FormNest} />
      <Route path="/mixins" component={Mixins} />
      <Route path="/comment" component={Comment} />
      <Route path="/clock" component={Clock} />
      <Route path="/funcChild" component={AdancedTabSelector} />
    </App>
  </Router>
)
