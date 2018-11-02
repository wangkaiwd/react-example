import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom'
import About from '@/pages/about/About'
import Inbox from '@/pages/inbox/Inbox'
import Example from '@/pages/example'
import Page404 from '@/pages/404'
import OrderSettings from '@/pages/salesOrder/orderSetting/orderSettings'
import RefundOrderAgent from '@/pages/salesOrder/refundOrder/agentEnd'
import RefundOrderMember from '@/pages/salesOrder/refundOrder/memberEnd'
import TransactionAgent from '@/pages/salesOrder/transactionOrder/agentEnd'
import TransactionMember from '@/pages/salesOrder/transactionOrder/memberEnd'
import { Layout, Spin } from 'antd'
import BreadCrumb from '@/components/BreadCrumb'

const {Content} = Layout
@withRouter
export default class PageContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      spinning: true
    }
  }

  componentDidUpdate = () => {
    if (this.state.spinning) {
      this.setLoading()
    }
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setState({spinning: true})
    }
  }
  setLoading = () => {
    setTimeout(() => this.setState({spinning: false}), 300)
  }

  render () {
    const {match} = this.props
    return (
      <Router>
        <React.Fragment>
          <BreadCrumb/>
          <Content className="page">
            <Spin tip="ADMIN" wrapperClassName="loading-wrap" spinning={this.state.spinning} size={'large'}>
              {this.state.spinning || <Switch>
                <Route path={`${match.path}/about`} component={About}/>
                <Route path={`${match.path}/inbox`} component={Inbox}/>
                <Route path={`${match.path}/salesOrder/orderSettings`} component={OrderSettings}/>
                <Route path={`${match.path}/salesOrder/refundOrder/agentEnd`} component={RefundOrderAgent}/>
                <Route path={`${match.path}/salesOrder/refundOrder/memberEnd`} component={RefundOrderMember}/>
                <Route path={`${match.path}/salesOrder/transactionOrder/agentEnd`} component={TransactionAgent}/>
                <Route path={`${match.path}/salesOrder/transactionOrder/memberEnd`}
                       component={TransactionMember}/>
                <Route path={`${match.path}/test/example`} component={Example}/>
                <Redirect from={`${match.path}`} to={`${match.path}/test/example`}/>
                <Route component={Page404}/>
              </Switch>}
            </Spin>
          </Content>
        </React.Fragment>
      </Router>
    )
  }
}
