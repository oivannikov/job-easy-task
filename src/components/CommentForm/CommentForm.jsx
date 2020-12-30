import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { createComment } from '../../api/comments';

import './CommentForm.scss';

export function CommentForm({ upDateComments, onCreateComment }) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

 async function handleSumbit(e) {
    e.preventDefault();
  
    const newComment = {
      name,
      text: title,
    }
 
    if (name && title) {
      await createComment(newComment);
      upDateComments();
    }

    setName('');
    setTitle('');
    onCreateComment(false);
  }

  return (
    <form className="form col s12" onSubmit={(e) => handleSumbit(e)}>
      <div className="row">
        <div className="input-field col s12">
          <input
            type="text"
            className="validate"
            value={name}
            placeholder="Your Name"
            onChange={({ target }) => setName(target.value)}
            required
          />
        </div>
      </div>

      <textarea
        className="form__textarea"
        value={title}
        placeholder="Your Comment"
        onChange={({ target }) => setTitle(target.value)}
        required>
      </textarea>

      <div className="row">
        <div className="input-field col s12">
          <button className="btn waves-effect waves-light col s12" type="submit">Add comment</button>
        </div>
      </div>
    </form>
  );
}

CommentForm.propTypes = {
  upDateComments: PropTypes.func.isRequired,
  onCreateComment: PropTypes.func.isRequired,
}
