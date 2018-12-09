import { createStore, applyMiddleware, compose } from "redux";
// redux-thunk是一个比较流行的异步action中间件，帮助你统一了异步和同步action的调用方式
// 把异步过程放在action级别解决，对component没有影响
// 它能够在书写actionCreators返回一个function,而不仅仅是对象(action)
import ReduxThunk from 'redux-thunk'
import reducer from "./reducer";

// 通过redux DevTools Extension文档进行配置
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
  // redux中间件：通过对dispatch进行了一个升级，之前只可以接收一个action（对象）,现在可以接收一个function并执行，也可以接收对象
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
