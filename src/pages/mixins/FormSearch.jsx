import React, { Component } from 'react';
import { Form, Button, Input, DatePicker } from 'antd';
const { RangePicker } = DatePicker;
const FormItem = Form.Item;
import PropTypes from 'prop-types';
@Form.create()
class FormSearch extends Component {
  state = {
    date: {}
  }
  onSearch = (e) => {
    e.preventDefault();
    const searchKey = this.props.form.getFieldsValue()
    if (searchKey.date) {
      if (Array.isArray(searchKey.date)) { // 处理时间
        searchKey.date[0] = Math.round(new Date(searchKey.date[0]).getTime() / 1000)
        searchKey.date[1] = Math.round(new Date(searchKey.date[1]).getTime() / 1000)
      } else {
        searchKey.date = Math.round(new Date(searchKey.date).getTime() / 1000)
      }
    }
    this.props.getSearchKey(searchKey)
  }
  reset = () => {
    const { form, resetPageKey } = this.props
    form.resetFields()
    resetPageKey()
    this.props.getSearchKey({})
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Form onSubmit={this.onSearch} layout="inline">
          {this.props.formMeta.map(item => (
            <FormItem
              key={item.key}
              label={item.label}
            >
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