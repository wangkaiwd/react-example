import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from 'redux-thunk'
import reducer from "./reducer";

// 通过redux DevTools Extension文档进行配置
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk)
  // other store enhancers if any
)

const store = createStore(reducer, enhancer);

// const store = createStore(
//   reducer,
//   // 开启chrome redux调试工具
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// // store:
// //  1. 维持应用的state
// //  2. getState()方法获取state
// //  3. dispatch(action)方法更新state
// //  4. subscribe(listener):注册监听器
// //  5. 通过subscribe(listener)返回的函数注销监听器
export default store;
