import React, { Component } from 'react';
import { Icon, Input, List, Row } from 'antd';

class MessageList extends Component {
  deepClone = element => JSON.parse(JSON.stringify(element));
  onChangeMessages = (e, key) => {
    const { value } = e.target;
    const { inputMessages, updateInputMessages } = this.props;
    const inputMessagesCopy = this.deepClone(inputMessages);
    const index = inputMessagesCopy.findIndex(message => message.key === key);
    inputMessagesCopy[index].value = value;
    updateInputMessages(inputMessagesCopy);
  };
  onDelete = (key) => {
    const { inputMessages, updateInputMessages, keys, updateKeys } = this.props;
    const inputMessagesCopy = this.deepClone(inputMessages);
    const keysCopy = [...keys];
    const index = inputMessagesCopy.findIndex(message => message.key === key);
    inputMessagesCopy.splice(index, 1);
    keysCopy.splice(index, 1);
    updateInputMessages(inputMessagesCopy);
    updateKeys(keysCopy);
  };
  onChangeStatus = (key) => {
    const { inputMessages, updateInputMessages } = this.props;
    const inputMessagesCopy = this.deepClone(inputMessages);
    const index = inputMessagesCopy.findIndex(message => message.key === key);
    const target = inputMessagesCopy[index];
    if (target.edit) {
      target.edit = false;
    } else {
      target.edit = true;
    }
    updateInputMessages(inputMessagesCopy);
  };

  render () {
    const { inputMessages } = this.props;
    return (
      <Row>
        <List
          bordered
          size={'small'}
          dataSource={inputMessages}
          renderItem={item => (
            <List.Item key={item.key} className={'chat-app-item'}>
              <span className={'chat-app-item-text'}>
                {
                  item.edit ?
                    <Input
                      size={'small'}
                      placeholder={'please write something'}
                      value={item.value}
                      onChange={(e) => this.onChangeMessages(e, item.key)}
                    />
                    :
                    item.value
                }
              </span>
              <span className={'chat-app-item-tools'}>
                <a
                  href="javascript:;"
                  onClick={() => this.onChangeStatus(item.key)}
                >
                  <Icon type={item.edit ? 'check' : 'edit'}/>
                </a>
                <a
                  href="javascript:;"
                  onClick={() => this.onDelete(item.key)}
                >
                  <Icon type="delete"/>
                </a>
              </span>
            </List.Item>
          )}
        />
      </Row>
    );
  }
}
export default MessageList;
