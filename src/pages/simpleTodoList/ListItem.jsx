import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
class ListItem extends Component {
  emptyData = () => {
    const { list } = this.props
    if (list.length === 0) {
      return <div>暂无待办事项</div>
    }
    return null
  }
  // 进行性能优化，但是对应的开发者工具并没有做出正确的提示
  shouldComponentUpdate(nextProps) {
    if (nextProps.list !== this.props.list) {
      return true
    }
    return false
  }
  renderList = () => {
    const { list, deleteList } = this.props
    return (
      <ul>
        {list.map((item, i) => (
          <li
            key={item.key}
            onClick={() => deleteList(i)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    )
  }
  render() {
    console.log('child render');
    return (
      <Fragment>
        {this.emptyData()}
        {this.renderList()}
      </Fragment>
    );
  }
  // 1. 一个组件要从父组件接收参数
  // 2. 只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
  // 如果这个组件第一次存在于父组件中，不会执行
  // 如果这个组件之前已经存在于父组件之中，才会执行
  componentWillReceiveProps() {
    // console.log('componentWillReceiveProps');
  }
}
ListItem.propTypes = {
  list: PropTypes.array,
  deleteList: PropTypes.func.isRequired
}
ListItem.defaultProps = {
  list: []
}
export default ListItem
