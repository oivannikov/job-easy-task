import React from 'react';

import './Modal.scss';

export function Modal({ children, onAddComment }) {
  return (
    <div className="modal active" onClick={() => onAddComment(false)}>
      <div className="modal__content active" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
