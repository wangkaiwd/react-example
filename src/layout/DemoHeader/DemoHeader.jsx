import React, { Component } from 'react';
import { Layout } from 'antd';
import './DemoHeader.scss';

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
