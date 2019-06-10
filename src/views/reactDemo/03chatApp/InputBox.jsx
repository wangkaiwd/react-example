import React, { Component } from 'react';
import { Button, Col, Input, Row } from 'antd';

class InputBox extends Component {
  render () {
    const { value, onChange, onClickSend } = this.props;
    return (
      <Row type={'flex'} gutter={8}>
        <Col span={8}>
          <Input
            placeholder={'please write your thinking'}
            value={value}
            onChange={onChange}
          />
        </Col>
        <Col>
          <Button type="primary" onClick={onClickSend}>Send</Button>
        </Col>
      </Row>
    );
  }
}
export default InputBox;
