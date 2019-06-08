import React from 'react';
import './CommentListItem.scss';

function CommentListItem (props) {
  const { commentItem } = props;
  return (
    <div className={'comment-list-item'}>
      <div className={'comment-list-item-avatar'}>
        <img src={commentItem.avatar} alt=""/>
      </div>
      <div className={'comment-list-item-user'}>
        <p className={'comment-list-item-user-name'}>
          <a href="javascript:;">{commentItem.username}</a>
        </p>
        <p className={'comment-list-item-user-speak'}>
          {commentItem.comment}
        </p>
      </div>
    </div>
  );
}

export default CommentListItem;
