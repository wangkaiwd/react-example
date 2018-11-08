import React, { Component } from 'react';
import { Form, Input, Button } from 'antd'
const FormItem = Form.Item;
@Form.create()
class Children extends Component {
  render() {
    const { getFieldDecorator } = this.props.form
    const parentGetFieldDecorator = this.props.formParent.getFieldDecorator
    return (
      <React.Fragment>
        <Form>
          <FormItem>
            <FormItem label="测试">
              {getFieldDecorator('test', {})(
                <Input placeholder="测试" />
              )}
            </FormItem>
          </FormItem>
        </Form>
        <FormItem label="测试2">
          {parentGetFieldDecorator('test2', {})(
            <Input placeholder="测试2" />
          )}
        </FormItem>
      </React.Fragment>
    );
  }
}

export default Children;