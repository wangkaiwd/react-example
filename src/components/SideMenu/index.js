import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SideMenu extends Component {
  render () {
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
          <li>内容2</li>
          <li>内容3</li>
          <li>内容4</li>
          <li>内容5</li>
          <li>内容6</li>
          <li>内容7</li>
          <li>内容8</li>
          <li>内容9</li>
          <li>内容10</li>
        </ul>
      </div>
    )
  }
}

export default SideMenu