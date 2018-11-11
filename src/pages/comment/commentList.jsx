import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from './comments.less'

class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  }
  render() {
    const { auth, article } = this.props.comment
    return (
      <div className={styles['comment-item']}>
        <div className={styles.avatar}>
        </div>
        <div className={styles.detail}>
          <div className={styles.auth}>
            <a href="javascript:;">{auth}</a>
          </div>
          <div className={styles.article}>
            {article}
          </div>
        </div>
      </div>
    )
  }
}

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired
  }
  render() {
    return (
      <div className={styles['comment-list']}>
        {this.props.comments.map((comment, i) => (
          <CommentItem comment={comment} key={i} />
        ))}
      </div >
    );
  }
}

export default CommentList;
