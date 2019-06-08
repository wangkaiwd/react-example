import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd';
import './CommentForm.scss';

const { TextArea } = Input;

class CommentForm extends Component {
  render () {
    return (
      <Row className={'comment-form'}>
        <Col xl={18}>
          <TextArea
            placeholder="please write your comment info"
            autosize={{ minRows: 6, maxRows: 10 }}
          />
        </Col>
        <Col span={24}>
          <Button className={'comment-form-submit'} type={'primary'}>Submit</Button>
        </Col>
      </Row>
    );
  }
}

export default CommentForm;
