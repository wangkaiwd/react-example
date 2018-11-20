import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SideMenu extends Component {
  render() {
    return (
      <div className="left-nav">
        <ul>
          <Link to='/chat'>
            <li>chat</li>
          </Link>
          <Link to='/formAntd'>
            <li>FormAntd</li>
          </Link>
          <Link to='/jsx'>
            <li>深入jsx</li>
          </Link>
          <Link to='/fieldsSet'>
            <li>DynamicFieldSet</li>
          </Link>
          <Link to='/tabSelector'>
            <li>tabSelector</li>
          </Link>
          <Link to='/formNest'>
            <li>formNest</li>
          </Link>
          <Link to='/mixins'>
            <li>mixins</li>
          </Link>
          <Link to='/comment'>
            <li>comment</li>
          </Link>
          <Link to='/clock'>
            <li>clock</li>
          </Link>
          <Link to='/funcChild'>
            <li>funcChild</li>
          </Link>
          <Link to='/formedit'>
            <li>FormEdit</li>
          </Link>
          <Link to='/tableEllipsist'>
            <li>TableEllipsist</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default SideMenu
