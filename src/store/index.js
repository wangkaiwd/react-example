import { createStore } from "redux";
import reducer from "./reducer";
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store:
//  1. 维持应用的state
//  2. getState()方法获取state
//  3. dispatch(action)方法更新state
//  4. subscribe(listener):注册监听器
//  5. 通过subscribe(listener)返回的函数注销监听器
export default store;
