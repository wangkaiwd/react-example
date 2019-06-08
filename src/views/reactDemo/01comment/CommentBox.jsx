import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { commentsData } from 'mock';

function CommentBox (props) {
  return (
    <div>
      <h1>Comments ({commentsData.comments.length})</h1>
      <CommentList commentsData={commentsData.comments}/>
      <CommentForm/>
    </div>
  );
}

export default CommentBox;


