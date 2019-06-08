import React, { Component } from 'react';
import { Layout } from 'antd';
import SideMenu from 'components/sideMenu';
import './DemoSider.scss';

const { Sider } = Layout;

class DemoSider extends Component {
  render () {
    return (
      <Sider width={260} className={'demo-sider'}>
        <div className="logo">React-Example</div>
        <SideMenu/>
      </Sider>
    );
  }
}

export default DemoSider;
