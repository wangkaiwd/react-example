import React, { Component } from 'react';
import { Layout } from 'antd';
import './demoHeader.scss';

const { Header } = Layout;

class DemoHeader extends Component {
  render () {
    return (
      <Header className={'demo-header'}>
        Header
      </Header>
    );
  }
}

export default DemoHeader;
