import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import menuList, { routerConfig } from 'router/router.config';

const { SubMenu } = Menu;
@withRouter
class SideMenu extends Component {
  state = {
    menuTree: [],
    selectedKeys: []
  };

  componentDidMount () {
    const menuTree = this.createMenus(menuList);
    this.setState({ menuTree });
    this.getSelectedKeys();
  }

  getSelectedKeys = () => {
    const { pathname } = this.props.location;
    const target = routerConfig.filter(router => pathname.includes(router.key));
    const selectedKeys = [];
    if (target.length > 0) {
      selectedKeys.push(target[0].key);
    }
    this.setState({ selectedKeys });
  };
  onOpenChange = (openKeys) => {
    console.log('openKeys', openKeys);
  };
  onSelect = ({ selectedKeys }) => {
    this.setState({ selectedKeys });
  };
  createMenus = (menuList) => {
    return menuList.map(menu => {
      if (menu.children) {
        return this.getSubMenuItem(menu);
      }
      return this.getMenuItem(menu);
    });
  };
  getMenuItem = (menu) => (
    <Menu.Item key={menu.key}>
      {menu.icon && <Icon type={menu.icon}/>}
      <Link to={menu.key}>{menu.title}</Link>
    </Menu.Item>
  );
  getSubMenuItem = (menu) => (
    <SubMenu
      key={menu.key}
      title={
        <span>
          {menu.icon && <Icon type={menu.icon}/>}
          <span>{menu.title}</span>
        </span>
      }
    >
      {this.createMenus(menu.children)}
    </SubMenu>
  );

  render () {
    const { menuTree, selectedKeys } = this.state;
    return (
      <Menu
        selectedKeys={selectedKeys}
        onOpenChange={this.onOpenChange}
        onSelect={this.onSelect}
        mode="inline"
        theme="dark"
      >
        {menuTree}
      </Menu>
    );
  }
}
export default SideMenu;
