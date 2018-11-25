import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import menuConfig from '@/config/menuConfig'
class SideMenu extends Component {
  render() {
    return (
      <div className="left-nav">
        <ul>
          {menuConfig.map(menu => (
            <NavLink
              to={menu.routerPath}
              key={menu.realPath}
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              <li>{menu.title}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    )
  }
}

export default SideMenu
