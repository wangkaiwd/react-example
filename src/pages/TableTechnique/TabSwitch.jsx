import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
class TabSwitch extends Component {
  callback = (key) => {
    console.log(key);
  }
  render() {
    const { tabConfig } = this.props
    return (
      <div>
        <Tabs defaultActiveKey={tabConfig[0]} onChange={this.callback}>
          {tabConfig.map((item, i) => (
            <TabPane tab={item} key={item}>
              {
                Array.isArray(this.props.children)
                  ?
                  this.props.children[i]
                  :
                  this.props.children
              }
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
TabSwitch.propTypes = {
  tabConfig: PropTypes.array.isRequired
}
export default TabSwitch;