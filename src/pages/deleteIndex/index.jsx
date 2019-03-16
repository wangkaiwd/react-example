import React, { Component } from 'react';
import {
  Form, Input, Icon, Button,
} from 'antd';

let id = 0;
// 在修饰器外面再封装一层函数，可以传入其它传入其它参数
// function testTable(isTestTable) {
//   // target: 要修饰的目标cclass
//   return function (target) {
//     target.isTestTable = isTestTable;
//   }
// }
@Form.create()
class DynamicForm extends Component {
  state = {
    data: [
      { title: '哈哈', key: 1 },
      { title: '呵呵', key: 2 }
    ],
    keys: []
  }
  componentDidMount = () => {
    this.uniQueKey(this.state.data)
  }
  // 生成唯一key
  uniQueKey = data => {
    const keys = data.map((item, i) => i)
    this.setState({ keys })
  }
  // 移除
  onRemove = i => {
    const { keys, data } = this.state
    keys.splice(i, 1)
    data.splice(i, 1)
    this.setState({ keys, data })
  }
  // 新增
  onAdd = () => {
    const { keys, data } = this.state
    const lastKey = keys[keys.length - 1],
      nextKey = lastKey + 1,
      tempData = { title: '', key: '' }
    data.push(tempData)
    this.setState({ keys: keys.concat(nextKey), tempData })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) { console.log('params is :', this.state.data) }
    });
  }
  onChange = (e, i) => {
    const { data } = this.state
    data[i].title = e.target.value
    this.setState({ data })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { keys } = this.state
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    const formItems = keys.map((k, i) => (
      <Form.Item
        {...(i === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        label={i === 0 ? 'Passengers' : ''}
        required={false}
        key={k}
      >
        {/* 这里通过索引赋值是有问题的 */}
        {getFieldDecorator(`names${k}`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [{
            required: true,
            whitespace: true,
            message: "Please input passenger's name or delete this field."
          }],
        })(
          <Input
            onChange={(e) => this.onChange(e, i)}
            placeholder="passenger name"
            style={{ width: '60%', marginRight: 8 }}
          />
        )}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            disabled={keys.length === 1}
            onClick={() => this.onRemove(i)}
          />
        ) : null}
      </Form.Item>
    ));
    return (
      <Form onSubmit={this.handleSubmit}>
        {formItems}
        <Form.Item {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.onAdd} style={{ width: '60%' }}>
            <Icon type="plus" /> Add field
          </Button>
        </Form.Item>
        <Form.Item {...formItemLayoutWithOutLabel}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default DynamicForm;
// 数组索引遍历问题