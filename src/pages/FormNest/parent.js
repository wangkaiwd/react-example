import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import Children from './children'
const FormItem = Form.Item;
@Form.create()
class ParentForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const data = this.props.form.getFieldsValue()
    console.log('data', data);
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="用户名">
            {getFieldDecorator('userName', {})(
              <Input placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">提交</Button>
          </FormItem>
        </Form>
        <Children formParent={this.props.form} />
      </div>
    );
  }
}

export default ParentForm;