import React, { Component } from 'react';
import { Button } from 'antd';
import { fetchDetailList, fetchCityList, fetchHome } from '@/api';

class ChildLife extends Component {
  constructor (props) {
    super(props);
    this.state = {
      test: 'hhh'
    };
    console.log('constructor');
  }

  componentDidMount () {
    // Promise.all:用于将多个Promise实例，包装成一个新的Promise实例
    // Promise.all: 方法中数组的每一项都是一个Promise实例
    // 调用all方法之后Promise的状态：
    //    (1) 数组中的每一个Promise方法都是成功状态, 数组中的每一项返回值组成的数组，传递给p的回调函数
    //    (2) 数组中的每一个Promise方法有一个是失败状态，p的状态就变成rejected,此时第一个被reject的实例的
    //        返回值，会传给p的回调函数
    // console.time('start');
    // const allPromise = Promise.all([this.promiseA(), this.promiseB(), this.promiseC()]);
    // allPromise.then(
    //   res => {
    //     // console.timeEnd('start');
    //     console.log('异步请求全部完成', res);
    //   },
    //   err => {
    //     console.log('异步请求至少有一个失败', err);
    //     // console.dir(err);
    //   }
    // );
  }

  // 在更新发生后立即被调用。这个方法在第一次渲染时不会被调用
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    // 在这里可以进行判断当前的props和之前的props以及当前的state和之前的state
    // 根据props和state的变化可以来进行一系列操作
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    // 在进行操作的时候要比较之前和当前的状态，否则可能会导致死循环
    // 官方demo: 在userID发生变化的时候才会发起请求
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }
  };
  promiseA = () => {
    return new Promise((resolve, reject) => {
      const data = {
        name: '测试A',
        content: 'promiseA'
      };
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  };
  promiseB = () => {
    return new Promise((resolve, reject) => {
      const data = {
        name: '测试B',
        content: 'promiseB'
      };
      setTimeout(() => {
        resolve(data);
      }, 3000);
    });
  };
  promiseC = () => {
    return new Promise((resolve, reject) => {
      const data = {
        name: '测试C',
        content: 'promiseC'
      };
      console.log(a);// 故意失败
      setTimeout(() => {
        resolve(data);
      }, 4000);
    });
  };
  // derive:得到，导出；源于，来自；(从...中)提取
  // 在render()方法之前调用
  // 调用时机：组件初始化和之后的更新。
  // 它应该返回一个对象来更新state或返回null表示什么都不更新
  static getDerivedStateFromProps (props, state) {
    // console.log('props', props, state);
    // 这里相当于: 扩展运算符和Object.assign(),如果有的话就会替换，如果没有的话就新增
    return {name: props.name};
  }

  // render:类组件中唯一必须的方法
  render () {
    console.log('render');
    const {name} = this.props;
    return (
      <div>
        <Button type="primary">{name}</Button>
      </div>
    );
  }
}

class LifeCircle extends Component {
  state = {
    name: '刘备'
  };
  onClick = () => {
    const name = this.state.name === '刘备' ? '张飞' : '刘备';
    this.setState({name});
  };

  render () {
    const {name} = this.state;
    return (
      <div>
        <ChildLife name={name}/>
        <Button style={{marginTop: '10px'}} type="primary" onClick={this.onClick}>change</Button>
      </div>
    );
  }
}

export default LifeCircle;  