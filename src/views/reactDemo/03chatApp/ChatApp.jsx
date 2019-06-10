import React, { Component } from 'react';
import { message } from 'antd';
import './ChatApp.scss';
import MessageList from './MessageList';
import InputBox from './InputBox';

class ChatApp extends Component {
  state = {
    inputMessages: [],
    value: ''
  };
  keys = [];

  componentDidMount () {
    this.createKeys();
  }

  onClickSend = () => {
    let { inputMessages, value } = this.state;
    if (value.trim() === '') return message.warn('请输入内容后再提交！');
    const key = this.createId();
    this.setState({
      inputMessages: [...inputMessages, { key, value }],
      value: ''
    });
  };
  createKeys = () => {
    const { inputMessages } = this.state;
    this.keys = inputMessages.map((item, i) => i);
  };
  createId = () => {
    const length = this.keys.length - 1;
    const lastKey = length < 0 ? 1 : this.keys[length];
    const newKey = lastKey + 1;
    this.keys.push(newKey);
    return newKey;
  };
  onChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
  };
  updateInputMessages = newMessages => this.setState({ inputMessages: newMessages });
  updateKeys = newKeys => this.keys = newKeys;

  render () {
    const { inputMessages, value } = this.state;
    return (
      <div className={'chat-app'}>
        <InputBox
          value={value}
          onChange={this.onChange}
          onClickSend={this.onClickSend}
        />
        <MessageList
          inputMessages={inputMessages}
          keys={this.keys}
          updateInputMessages={this.updateInputMessages}
          updateKeys={this.updateKeys}
        />
      </div>
    );
  }
}
export default ChatApp;
