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
    return (
      <Fragment>
        {this.emptyData()}
        {this.renderList()}
      </Fragment>
    );
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
