import React, { Component } from 'react'
import { Form, Input, Icon, Button, DatePicker, Select } from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 6},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 12},
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
        style: {width: '80%'},
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
        style: {width: '80%'},
        placeholder: '请输入密码'
      },
      rules: [
        {required: true, message: 'Please input your username!'}
      ]
    }
  ]

}

class DynamicFieldSet extends Component {
  state = {
    count: 0
  }
  addClick = () => {
    let {count} = this.state
    count++
    const formOptions = {
      key: `username${count}`,
      formItemProps: {
        label: `用户名${count}`,
      },
      widget: Select,
      widgetProps: {
        style: {width: '60%'},
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
        style: {width: '60%'},
        placeholder: `请输入用户名${count}`
      }
    }
    formMeta.elements.push(formOptions, formOptions2)
    // formMeta.elements.push(formOptions2)
    this.setState({count})
  }
  remove = (key) => {
    const {elements} = formMeta
    const index = elements.findIndex(element => element.key === key)
    console.log(index)
    elements.splice(index, 1)
    this.setState({})
  }

  render () {
    const {getFieldDecorator, getFieldValue} = this.props.form
    return (
      <div>
        <Form style={{maxHeight: '80vh', overflowY: 'scroll'}}>
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
              <Icon style={{fontSize: '24px', position: 'relative', top: '4px', left: '6px'}}
                    onClick={() => this.remove(element.key)} type="minus-circle"
                    theme="outlined"/>
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