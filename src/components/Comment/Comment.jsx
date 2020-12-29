import React from 'react';

import './Comment.scss';

export function Comment({ comment }) {
  // const { name, text } = comment;

  return (
    <div className="comment">
      <div className="comment__info">
        {comment.name}
      </div>

      <div className="comment__text">
        {comment.text}
      </div>
    </div>
  );
}
