import React, { Component, Fragment } from 'react';
import { Button, Col, Icon, Input, List, Row } from 'antd';
import './ChatApp.scss';

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

  render () {
    const { inputMessages, value } = this.state;
    return (
      <Fragment>
        <Row className={'chat-app'} type={'flex'} gutter={8}>
          <Col span={8}>
            <Input placeholder={'please write your thinking'} value={value} onChange={this.onChange}/>
          </Col>
          <Col>
            <Button type="primary" onClick={this.onClickSend}>Send</Button>
          </Col>
        </Row>
        <Row>
          <List
            bordered
            size={'small'}
            dataSource={inputMessages}
            renderItem={item => (
              <List.Item key={item.key} className={'chat-app-item'}>
                <span className={'chat-app-item-text'}>
                  {item.value}
                </span>
                <span className={'chat-app-item-tools'}>
                  <a href="javascript:;"><Icon type="edit"/></a>
                  <a href="javascript:;"><Icon type="delete"/></a>
                </span>
              </List.Item>
            )}
          />
        </Row>
      </Fragment>
    );
  }
}
export default ChatApp;
