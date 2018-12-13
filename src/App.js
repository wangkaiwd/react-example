import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SideMenu from '@/components/SideMenu'
class App extends Component {
  render() {
    return (
      <div className="app">
        <SideMenu />
        <div className="content">
          {this.props.children}
        </div>
      </div >
    )
  }
}

export default App