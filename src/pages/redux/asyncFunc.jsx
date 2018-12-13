import React, { Component } from 'react';
// 中间件：截获某种类型的action，然后去访问api
//        之后再发出action
// 床用中间件：
//     1. redux-logger
//     2. redux-thunk
//     3. redux-saga
class asyncFunc extends Component {
  render() {
    return (
      <div>
        异步async
      </div>
    );
  }
}

export default asyncFunc;
