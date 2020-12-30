import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { getComments } from './api/comments';
import { CommentForm } from './components/CommentForm/CommentForm';
import { CommentsList } from './components/CommentsList/CommentsList';
import { Modal } from './components/Modal/Modal';
import { Preloader } from './components/Preloader/Preloader';
import { UpArrow } from './components/UpArrow/UpArrow';

import { actionSetComments } from './redux/actions';

import './App.scss';

function App() {
  const dispatch = useDispatch();
  const [createComment, setCreateComment] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    getComments()
    .then(comments => {
      dispatch(actionSetComments(comments));
      setLoader(false);
    });
  
  }, [dispatch]);

  async function upDateComments() {
    const comments = await getComments();
    
    dispatch(actionSetComments(comments));
  }

  return (
    <div className="app">
      <div className="app__create-comment">
        <button
          className="waves-effect waves-light btn"
          type="sumbit"
          onClick={() => setCreateComment(true)}
        >
          Create comment
        </button>
      </div>

     { createComment && (
      <Modal onAddComment={setCreateComment} >
        <CommentForm upDateComments={upDateComments} onCreateComment={setCreateComment} />
      </Modal>
    )}

    { loader ? <Preloader /> : <CommentsList /> }

    <UpArrow />
    </div>
  );
}

export default App;
