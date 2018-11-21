import React, { Component } from 'react'
const ThemeContext = React.createContext('light');

class ContextApi extends React.Component {
  data = {
    color: 'pink',
    capability: '200ml'
  }
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value={this.data}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    //  可以直接更改
    this.context.capability = '400ml';
    return (
      <span>{this.context.capability}</span>
    );
  }
}
export default ContextApi