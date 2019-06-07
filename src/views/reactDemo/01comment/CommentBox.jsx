import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

function CommentBox (props) {
  return (
    <div>
      <h1>comment Title</h1>
      <CommentList/>
      <CommentForm/>
    </div>
  );
}

export default CommentBox;


