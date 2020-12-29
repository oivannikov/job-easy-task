import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { createComment } from '../../api/comments';

import './CommentForm.scss';

export function CommentForm({ upDateComments, onAddComment}) {
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
    onAddComment(false);
  }

  return (
    <form className="col s12" onSubmit={(e) => handleSumbit(e)}>
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

      <div className="row">
        <div className="input-field col s12">
          <textarea
            className="materialize-textarea validate"
            value={title}
            placeholder="Your Comment"
            onChange={({ target }) => setTitle(target.value)}
            required>
          </textarea>
        </div>
      </div>
    
      <div className="row">
        <div className="input-field col s12">
          <button className="btn waves-effect waves-light col s12 marginTop" type="submit">Add comment</button>
        </div>
      </div>
    </form>
  );
}
