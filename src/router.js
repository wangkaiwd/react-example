import { HashRouter as Router, Route } from 'react-router-dom'
import React, { lazy } from 'react'
import App from './App'
import Chat from '@/pages/Chat'
import FormAntd from '@/pages/FormHandle/FormSubmitAntd'
import Jsx from '@/pages/Jsx'
import FieldsSet from '@/pages/FormHandle/AntdForm'
import TabSelector from '@/pages/tabSelect/tabSelector'
import FormNest from '@/pages/FormNest/parent'

export default () => (
  <Router>
    <App>
      <Route path="/chat" component={Chat} />
      <Route path="/formAntd" component={FormAntd} />
      <Route path="/jsx" component={Jsx} />
      <Route path="/fieldsSet" component={FieldsSet} />
      <Route path="/tabSelector" component={TabSelector} />
      <Route path="/formNest" component={FormNest} />
      {/*<Route path="/chat" component={Chat}/>*/}
    </App>
  </Router>
)
// import React, { lazy, Suspense } from 'react';
// import { HashRouter as Router, Route, Switch } from "react-router-dom";

// const RouterLis = [
  // {
  //   component: lazy(() => import("./pages/Chat")),
  //   path: "/chat"
  // },
  // {
  //   component: lazy(() => import("../containers/Home")),
  //   path: "/home"
  // },
  // {
  //   component: lazy(() => import("../containers/My")),
  //   path: "/my"
  // },
  // {
  //   component: lazy(() => import("../containers/UserInfo")),
  //   path: "/my/userInfo"
  // },
  // {
  //   component: lazy(() => import("../containers/Works")),
  //   path: "/works"
  // },
  // {
  //   component: lazy(() => import("../containers/CourseDetail")),
  //   path: "/courseDetail/:id"
  // },
  // {
  //   component: lazy(() => import("../containers/OtherCourse")),
  //   path: "/otherCourse/:id"
  // },
  // {
  //   component: lazy(() => import("../containers/WorkDetail")),
  //   path: "/workDetail/:id"
  // }
// ];

// const RouterList = () => (
//   <Router>
//     <Suspense>
//       <Switch>
//         {RouterLis.map((item, key) => {
//           return <Route key={key} path={item.path} component={item.component} />
//         })}
//       </Switch>
//     </Suspense>
//   </Router>
// )

// export default RouterList;