import React, { Component, Fragment } from 'react';
import { Form, Input } from 'antd'
const data = [
  { title: '1' },
  { title: '2' },
  { title: '3' }
]
@Form.create()
class DeleteIndex extends Component {
  state = {
    list: data
  }
  onDelete = (i) => {
    console.log('delete')
    const { list } = this.state
    list.splice(i, 1)
    this.setState({ list })
  }
  onChange = (e, i) => {
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };
    const { getFieldDecorator } = this.props.form
    const { list } = this.state
    return (
      <Form className="delete">
        {list.map((item, i) => {
          return (
            <Fragment key={i}>
              <a href="javascript:;" onClick={() => this.onDelete(i)}>删除</a>
              <Form.Item {...formItemLayout} key={i} label="Name">
                {getFieldDecorator(`username${i}`, {
                  rules: [{ required: true, message: 'Please input your name' }],
                })(
                  <Input onChange={this.onChange} placeholder="Please input your name" />
                )}
              </Form.Item>
            </Fragment>
          )
        })}
      </Form>
    );
  }
}

export default DeleteIndex;