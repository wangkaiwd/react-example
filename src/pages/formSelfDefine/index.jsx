import React, { Component } from 'react';
import { Form, Input, Upload, Button } from 'antd';
import Child from './child';

@Form.create()
class FormSelf extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  checkPrice = (rule, value, callback) => {
    if (value > 0) {
      callback();
      return;
    }
    callback('Price must greater than zero!');
  };
  onSearch = () => {
    console.log(this.props.form.getFieldsValue());
    this.props.form.setFieldsValue({ price: 80 });
  };
  onReset = () => {
    this.props.form.resetFields();
  };

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item label="Price">
          {getFieldDecorator('price', {
            initialValue: 20,
            rules: [{ validator: this.checkPrice }],
          })(<Child/>)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={this.onSearch}>Search</Button>
          <Button type="primary" onClick={this.onReset}>Reset</Button>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default FormSelf;