import React from 'react';
import { Button } from 'antd';
import './assets/styles/base.scss';

const element = <h1 className={'greeting'}>hello world</h1>;
console.log('element', element);

function App () {
  return (
    <div className="App">
      App
      <Button type={'primary'}>antDesign按钮</Button>
      <a href="javascript:;">link</a>
      <ul>
        <li>内容1</li>
        <li>内容2</li>
        <li>内容3</li>
        <li>内容4</li>
        <li>内容5</li>
        <li>内容6</li>
        <li>内容7</li>
        <li>内容8</li>
        <li>内容9</li>
        <li>内容10</li>
      </ul>
    </div>
  );
}

export default App;
