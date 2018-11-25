import React, { Component } from 'react';

// redux Store
// const store = createStore(reducer)
// store的三个重要api: 1. getState() 2. dispatch(action) 3. subscribe(listener)
// 纯函数是满足如下条件的函数
//    相同的输入总是返回相同的输出
//    不产生副作用
//    不依赖外部装态

class Misc extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Misc;

// action:描述了一个行为的数据结构
//  {
//    type: ADD_TODOS, // 类型
//    text: 'Build my first Redux app' // 描述要做的事情
// }
// reducer: 纯函数
function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODOS: // 更新store
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    default:
      return state
  }
}

//  工具函数： 1. combineReducers({todos,counter}) 
//  接收多个reducer作为参数
//  2. bindActionCreators
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments))
  }
}

function bindActionCreators(actionCreators, dispatch) {
  const keys = Object.keys(actionCreators)
  const boundActionCreators = {}
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const actionCreator = actionCreators[key]
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
    }
  }
  return boundActionCreators
}
