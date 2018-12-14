import React, { Component } from 'react';
import CommentList from './commentList'
import CommentForm from './commentForm'
import styles from './comments.less'
const comments = [
  { id: 1, auth: '小明', article: '明天去吃饭' },
  { id: 2, auth: '小红', article: '明天去吃饭' },
  { id: 3, auth: '小绿', article: '明天去吃饭' },
  { id: 4, auth: '小蓝', article: '明天去吃饭' },
]
class CommentBox extends Component {
  render() {
    return (
      <div className={styles['comment-box']}>
        <h3 className={styles.title}>
          Comments({comments.length})
        </h3>
        <CommentList comments={comments} />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;
