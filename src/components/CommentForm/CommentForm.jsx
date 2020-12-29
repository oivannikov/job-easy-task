import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { createComment } from '../../api/comments';

import './CommentForm.scss';

export function CommentForm({ upDateComments }) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

 async function handleSumbit(e) {
    e.preventDefault();
  
    const newComment = {
      name,
      comment: title,
    }
 
    if (name && title) {
      await createComment(newComment);
      upDateComments();
    }

    setName('');
    setTitle('');
  }

  return (
    <form className="col s12" onSubmit={(e) => handleSumbit(e)}>
      <div className="row">
        <div className="input-field col s6">
          <input
            id="first_name"
            type="text"
            className="validate"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
          <label for="first_name">Your name</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <textarea
            id="textarea1"
            className="materialize-textarea"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            required>
          </textarea>
          <label for="textarea1">Your comment</label>
        </div>
      </div>

      <button className="waves-effect waves-light btn" type="sumbit">Add comment</button>
    </form>
  );
}
