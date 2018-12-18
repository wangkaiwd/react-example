import React, { Component, Fragment } from 'react';
import PropTyps from 'prop-types'
const withAuth = (Component) => {
  class WrapperComponent extends Component {
    render() {
      const { auth, ...otherProps } = this.props
      if (auth) {
        return (
          <Component {...otherProps} />
        );
      }
      return <span></span>
    }
  }
  WrapperComponent.propTypes = {
    auth: PropTyps.bool
  }
  WrapperComponent.defaultProps = {
    auth: true
  }
  return WrapperComponent
}


export default withAuth;