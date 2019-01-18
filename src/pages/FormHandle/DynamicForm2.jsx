import React, { Component, Fragment } from 'react';
import { Form, Input, Button } from 'antd';

@Form.create()
class DynamicForm2 extends Component {
  // 生成formItem
  mapFormItem = () => {
    const { getFieldDecorator } = this.props.form
    const keys = this.createKeys()
    console.log('map', keys)
    return keys.map(k => (
      <Fragment key={k}>
        <Form.Item label="昵称" layout="inline">
          {getFieldDecorator(`userInfo[${k}].nickname`, {
            rules: [{
              required: true,
              message: 'Please input your nickname',
            }],
          })(
            <Input placeholder="Please input your nickname" />
          )}
        </Form.Item>
        <Form.Item label="年龄">
          {getFieldDecorator(`userInfo[${k}].age`, {
            rules: [{
              required: true,
              message: 'Please input your age',
            }],
          })(
            <Input placeholder="Please input your age" />
          )}
        </Form.Item>
        <Form.Item>
          <Button onClick={() => this.onDelete(k)} type="danger">删除</Button>
        </Form.Item>
      </Fragment>
    ))
  }
  // 新增
  onAdd = () => {
    const { getFieldValue, setFieldsValue } = this.props.form
    const keys = getFieldValue('keys'),
      lastKeys = keys[keys.length - 1],
      nextKeys = typeof lastKeys === 'undefined' ? 0 : lastKeys + 1
    setFieldsValue({ keys: keys.concat(nextKeys) })
  }
  // 删除
  onDelete = (k) => {
    const { getFieldValue, setFieldsValue } = this.props.form
    const keys = getFieldValue('keys')
    setFieldsValue({ keys: keys.filter(item => item !== k) })
  }
  // 提交
  onSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('values is :', values)
      }
    })
  }
  // 创建key
  createKeys = () => {
    const { getFieldDecorator, getFieldValue } = this.props.form
    getFieldDecorator('keys', { initialValue: [] })
    const keys = getFieldValue('keys')
    return keys
  }
  render() {
    return (
      <Fragment>
        <Form onSubmit={this.onSubmit}>
          {this.mapFormItem()}
          <Button onClick={this.onAdd}>添加</Button>
          <Button htmlType="submit" type="primary">提交</Button>
        </Form>
      </Fragment>

    );
  }
}

export default DynamicForm2;

// 参考ant design 动态增减表单进行实现
// 整体数据：都是通过Form组件提供的方法来实现，没有使用state,可以完整使用Form组件提供的完整功能

// 注意点：
// 1. 之前通过index进行区分表单项，发现在删除的时候会出问题。原因：只要进行删除，表单项的整体索引就会前移，所以索引是会变的
//    解决方法：通过建立一个单独的数组来维护一个唯一值,如[0,1,2,3,4],唯一值是数组里的内容，而不是数组的索引

// 2. ant Form组件支持key值得嵌套，即 可以通过getFieldsValue直接获取一个数组