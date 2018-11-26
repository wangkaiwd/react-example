import React, { Component } from 'react';
import { Button, Row, Col } from "antd";
import { createStore, bindActionCreators } from "redux";
import { Provider, connect } from "react-redux";
const initialState = {
  count: 0,
  otherProps: { key: 0, title: 'notImportant' }
}
// reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS_ONE':
      return {
        ...state,
        count: state.count + 1
      }
    case 'MINUS_ONE':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}
// createStore
const store = createStore(counter)
// Action creator
const plusOne = () => ({ type: 'PLUS_ONE' })
const minusOne = () => ({ type: 'MINUS_ONE' })

class Counter extends Component {
  render() {
    console.log('props', this.props);
    const { plusOne, minusOne, count } = this.props
    return (
      <Row>
        <Col>
          <Col span={4}>
            <Button type="primary" onClick={plusOne}>+</Button>
          </Col>
          <Col span={4}>{count}</Col>
          <Col span={4}>
            <Button type="primary" onClick={minusOne}>-</Button>
          </Col>
        </Col>
      </Row>
    );
  }
}
// mapStateToProps:
//  params: state[整个redux store的state]
function mapStateToProps(state) {
  return {
    count: state.count
  }
}
function mapDispatchToProps(dispatch) {
  // bindActionCreators(actionCreators, dispatch)
  // actionCreators: 一个action creator,或者一个value是action creator的对象
  // dispatch: 一个由Store实例提供的dispatch函数
  return bindActionCreators({ plusOne, minusOne }, dispatch)
}
// connect: 连接react组件和redux store 连接操作不会改变原来的组件类，反而返回一个新的已与Redux store连接的组件类
const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
export default class CounterSample extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    )
  }
}
