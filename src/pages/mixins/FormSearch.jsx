import React, { Component } from 'react';
import { Form, Button, Input, Icon } from 'antd';
const FormItem = Form.Item;
import PropTypes from 'prop-types';
@Form.create()
class FormSearch extends Component {
  onSearch = (e) => {
    e.preventDefault();
    const queryData = this.props.form.getFieldsValue()
    this.props.getList(queryData)
  }
  reset = () => {
    this.props.form.resetFields();
    this.props.getList()
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Form onSubmit={this.onSearch} layout="inline">
          {this.props.formMeta.map(item => (
            <FormItem key={item.key} label={item.label}>
              {getFieldDecorator(item.key, {
                ...item.fieldsDecoratorProps
              })(
                <item.widget {...item.widgetProps} >
                  {item.children}
                </item.widget>
              )}
            </FormItem>
          ))}
          <FormItem>
            <Button type="primary" htmlType="submit">搜索</Button>
          </FormItem>
          <FormItem>
            <Button type="primary" onClick={this.reset}>重置</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

FormSearch.propTypes = {
  formMeta: PropTypes.array.isRequired,
  getList: PropTypes.func.isRequired,
}
FormSearch.defaultProps = {
  formMeta: [
    {
      key: 'keywords',
      label: '关键字',
      widget: Input,
      widgetProps: {
        placeholder: '请输入关键字',
      },
      fieldsDecoratorProps: {
        rules: []
      }
    },
    {
      key: 'price',
      label: '价格',
      widget: Input,
      widgetProps: {
        placeholder: '请输入价格',
      },
      fieldsDecoratorProps: {
        rules: []
      }
    },
  ]
}

export default FormSearch;

//  表单类型总结：
//  需要输入类型
//   1. Input  2. DatePicker  3. TextArea 
//  注意：日期需要进行单独处理

//  不需要输入类型
//  1. Radio  2. Select  3. Checkbox 
//  children: 需要有子选项来进行展示