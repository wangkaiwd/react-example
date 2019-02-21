import React, { useState, useEffect } from 'react';
import { Button, Statistic } from 'antd';

function Example () {
  const [count, setCount] = useState(0),
    [count2, setCount2] = useState(0);
  let timerId = null;
  // 在第一次render和之后的每次update后运行
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });
  // useEffect:
  //  1. 没有传入第二个参数：在第一次render以及之后的组件更新时触发(componentDidMount,componentDidUpdate)，在组件销毁的时候取消事件订阅(componentWillUnmount)
  //  2. 第二个参数传入空数组: 在第一次render之后的时候触发(componentDidMount)
  //  3. 第二个参数传入非空数组：在第一次render后执行，以及数组的相关项进行更新时执行
  useEffect(() => {
    timerId = setInterval(() => {
      // console.log('interval executing');
      // 如果新的state是通过前一个state计算出来的，需要传入一个函数来进行state的更改
      // 函数的第一个参数是前一个state的值
      setCount2(prev => prev + 1);
    }, 1000);
    console.log('count', count2);
    return () => {
      clearInterval(timerId);
      timerId = null;
    };
  }, []);
  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>
        Click me
      </Button>

      <Button onClick={() => setCount2(count2 - 1)}>
        update count2
      </Button>
      <Statistic title="Active Users" value={count2}/>
    </div>
  );
}

export default Example;
