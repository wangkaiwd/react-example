import React, { Component } from 'react';
import { Layout } from 'antd';
import SideMenu from 'components/sideMenu';
import PropTypes from 'prop-types';
import './DemoSider.scss';

const { Sider } = Layout;
class DemoSider extends Component {
  render () {
    const { width } = this.props;
    return (
      <Sider width={width} className={'demo-sider'}>
        <div className="logo">React-Example</div>
        <SideMenu/>
      </Sider>
    );
  }
}
DemoSider.propTypes = {
  width: PropTypes.number
};
DemoSider.defaultProps = {
  width: 260
};
export default DemoSider;
