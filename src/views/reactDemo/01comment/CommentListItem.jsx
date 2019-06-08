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
        <div className={'comment-list-item-user-name'}>
          <a href="javascript:;">{commentItem.username}</a>
        </div>
        <div className={'comment-list-item-user-speak'}>
          {commentItem.comment}
        </div>
      </div>
    </div>
  );
}

export default CommentListItem;
