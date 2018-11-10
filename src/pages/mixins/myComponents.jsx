import React, { Component } from 'react'
import PopupContainer from './demo1'
class myComponents extends Component {
  render() {
    return (
      <div>
        myComponents
      </div>
    );
  }
}

export default PopupContainer(myComponents);