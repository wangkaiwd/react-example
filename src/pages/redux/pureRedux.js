import React from 'react';
import { Button, Col, Row } from 'antd';
import { createStore, combineReducers, bindActionCreators } from 'redux';

function run() {
  // store initial state
  const initialState = { count: 0 };
  // reducer
  const counter = (state = initialState, action) => {
    switch (action.type) {
      case 'PLUS_ONE':
        return { count: state.count + 1 };
      case 'MINUS_ONE':
        return { count: state.count - 1 };
      case 'CUSTOM_COUNT':
        return { count: state.count + action.payload.count };
      default:
        return state;
    }
  };
  const totods = (state = {}) => state;
  // create store     通过combineReducers将俩个reducer合并到一起
  const store = createStore(combineReducers({ counter, totods }));
  // Action creator
  function plusOne() {
    return { type: 'PLUS_ONE' };
  }
  function minusOne() {
    return { type: 'MINUS_ONE' };
  }
  function customCount(count) {
    return { type: 'CUSTOM_COUNT', payload: { count } };
  }
  plusOne = bindActionCreators(plusOne, store.dispatch);
  store.subscribe(() => console.log('state', store.getState()));
  // through bindActionCreators make operate more easy
  plusOne();
  store.dispatch(minusOne());
  store.dispatch(customCount(10));
}

const Counter = () => {
  return (
    <div>
      <Row>
        <Col>
          <Button type="primary" onClick={run}>
            运行
          </Button>
        </Col>
        <Col>*请打开控制台查看运行结果</Col>
      </Row>
    </div>
  );
};
export default Counter;
