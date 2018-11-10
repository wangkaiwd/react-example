import React, { Component } from 'react';
const PopupContainer = (Wrapper) => {
  return class WrapperComponent extends Component {
    componentWillMount = () => {
      console.log('hoc will mount')
    }
    componentDidMount = () => {
      console.log('hoc did mount')
    }
    render() {
      return <Wrapper />
    }
  }
}
export default PopupContainer;