import React, { Component } from 'react';
import { Form, Input, Button } from "antd";
const { TextArea } = Input;
const FormItem = Form.Item;
@Form.create()
class CommentForm extends Component {
  handleSubmit = () => {
    console.log('submit');
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('text', {})(
            <TextArea rows={4} placeholder="placeholder" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">submit</Button>
        </FormItem>
      </Form>
    );
  }
}

export default CommentForm;
