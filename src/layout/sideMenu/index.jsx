import React, { Component } from 'react';
import { Menu, Icon, Button, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import menuList from 'router/router.config';

class SideMenu extends Component {
  state = {
    menuTree: []
  };

  componentDidMount () {
    const menuTree = this.createMenus(menuList);
    this.setState({ menuTree });
  }

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
    const { menuTree } = this.state;
    return (
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        {menuTree}
      </Menu>
    );
  }
}

export default SideMenu;
