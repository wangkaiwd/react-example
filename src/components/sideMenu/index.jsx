import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import menuList from 'router/router.config';

const { SubMenu } = Menu;
@withRouter
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
    console.log('props', this.props);
    const { menuTree } = this.state;
    return (
      <Menu
        mode="inline"
        theme="dark"
      >
        {menuTree}
      </Menu>
    );
  }
}
export default SideMenu;
