import React from 'react';

import './Comment.scss';

export function Comment({ comment }) {
  let today = new Date();
  let date = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate();

  return (
    <div className="comment">
      <div className="comment__info">
        {comment.name}

        <strong className="comment__date">{date}</strong>
      </div>

      <div className="comment__text">
        {comment.text}
      </div>
    </div>
  );
}
