import React from 'react';

import { useSelector } from 'react-redux';

import { Comment } from '../Comment/Comment';

export function CommentsList() {
  const comments = useSelector(state => state.comments);

  return (
    <div className="list">
    { (comments || []).map(comment => <Comment comment={comment} key={comment.id} />)};
    </div>
  );
}
