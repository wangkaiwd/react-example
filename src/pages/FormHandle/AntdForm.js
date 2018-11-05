import React, { Component } from 'react'
import { Form, Input, Icon, Button, DatePicker, Select } from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
}
const formMeta = {
  colon: true,
  elements: [
    {
      key: 'username',
      formItemProps: {
        label: '用户名',
      },
      widget: Input,
      widgetProps: {
        style: { width: '80%' },
        placeholder: '请输入用户名'
      },
      rules: []
    },
    {
      key: 'password',
      formItemProps: {
        label: '密码',
      },
      widget: Input,
      widgetProps: {
        style: { width: '80%' },
        placeholder: '请输入密码'
      },
      rules: [
        { required: true, message: 'Please input your username!' }
      ]
    }
  ]

}
class DynamicFieldSet extends Component {
  state = {
    count: 0
  }
  addClick = () => {
    let { count } = this.state
    count++
    const formOptions = {
      key: `username${count}`,
      formItemProps: {
        label: `用户名${count}`,
      },
      widget: Select,
      widgetProps: {
        style: { width: '60%' },
        placeholder: `请输入用户名${count}`
      },
      selectOptions: (
        [
          <Option key={1} value={1}>1</Option>,
          <Option key={2} value={2}>2</Option>,
          <Option key={3} value={3}>3</Option>,
        ]
      )
    }
    const formOptions2 = {
      key: `username1${count}`,
      formItemProps: {
        label: `时间${count}`,
      },
      widget: DatePicker,
      widgetProps: {
        style: { width: '60%' },
        placeholder: `请输入用户名${count}`
      }
    }
    formMeta.elements.push(formOptions, formOptions2)
    // formMeta.elements.push(formOptions2)
    this.setState({ count })
  }
  remove = (key) => {
    const { elements } = formMeta
    const index = elements.findIndex(element => element.key === key)
    console.log(index)
    elements.splice(index, 1)
    this.setState({})
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form
    return (
      <div>
        <Form style={{ maxHeight: '80vh', overflowY: 'scroll' }}>
          {formMeta.elements.map(element => (
            <FormItem {...formItemLayout} key={element.key} {...(element.formItemProps)}>
              {getFieldDecorator(element.key, {
                // rules: [{required: true, message: 'Please input your username!'}],
                rules: element.rules
              })(
                <element.widget {...(element.widgetProps)}>
                  {element.selectOptions}
                </element.widget>
              )}
              <Icon style={{ fontSize: '24px', position: 'relative', top: '4px', left: '6px' }}
                onClick={() => this.remove(element.key)} type="minus-circle"
                theme="outlined" />
            </FormItem>
          ))}
        </Form>
        <Button type={'primary'} onClick={this.addClick}>添加表单</Button>
      </div>
    )
  }
}

const WrappedDynamicFieldSet = Form.create()(DynamicFieldSet)
export default WrappedDynamicFieldSet

// Antd:自定义表单控件
//  自定义或第三方的表单控件，也可以与Form组件一起使用。只要该组件遵循以下的约定
//   1. 提供受控属性value或其它与valuePropName的值同名的属性
//   2. 提供onChange事件或trigger的值同名的事件
//   3. 不能是函数式组件： 函数式组件不能访问this,没有生命周期函数
// 这里可以结合受控组件和非受控组件来进行帮助理解
// 关键代码
// 执行组件的onChange事件
// handleCurrencyChange = (currency) => {
//   console.log(this.props)
//   判断this.props中是否有'value'属性，如果有的话,执行this.props.onChange(value)
//   value: Form组件对应的绑定的key值对应的value属性，方便获取值并传递给后端
//   if (!('value' in this.props)) {
//     this.setState({ currency });
//   }
//   this.triggerChange({ currency });
// }

// triggerChange = (changedValue) => {
//   // Should provide an event to pass value to Form.
//   const onChange = this.props.onChange;
//   if (onChange) {
//     console.log(Object.assign({}, this.state, changedValue))
//     onChange(Object.assign({}, this.state, changedValue));
//   }
// }
// 这样的话，可以在Form中动态获取输入值了