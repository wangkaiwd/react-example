import React, { Component } from 'react';
import CommentListItem from './CommentListItem';
import './CommentList.scss';

class CommentList extends Component {
  render () {
    const { commentsData } = this.props;
    return (
      <div className={'comment-list'}>
        {commentsData.map(commentItem => (
          <CommentListItem key={commentItem.id} commentItem={commentItem}/>
        ))}
      </div>
    );
  }
}

export default CommentList;
