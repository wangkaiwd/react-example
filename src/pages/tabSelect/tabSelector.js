import React, { Component } from 'react'
import styles from './tabSelector.less'
import PropTypes from 'prop-types'

class TabComponent extends Component {
  static propTypes = {
    options: PropTypes.array,
    activeIndex: PropTypes.number,
    changeTab: PropTypes.func
  }
  static defaultProps = {
    options: [],
    changeTab: () => {},
    activeIndex: -1
  }

  render () {
    const {options, activeIndex, changeTab} = this.props
    return (
      <div className="color-list">
        {options.map((item, i) => (
          <span
            key={i}
            onClick={() => changeTab(i)}
            className={`${styles['color-button']} ${i === activeIndex && styles.active}`}
          >
              {item}
            </span>
        ))}
      </div>
    )
  }
}

class TabSelector extends Component {
  state = {
    activeIndex: -1
  }
  colorList = ['Red', 'Blue', 'Orange']
  changeTab = (i) => {
    this.setState({activeIndex: i})
  }

  render () {
    const {activeIndex} = this.state
    return (
      <div className={styles.tabSelector}>
        <div className={styles.title}>selector Color:</div>
        <TabComponent
          options={this.colorList}
          activeIndex={this.state.activeIndex}
          changeTab={this.changeTab}
        />
      </div>
    )
  }
}

export default TabSelector