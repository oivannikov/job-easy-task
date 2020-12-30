import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

import './UpArrow.scss';

export function UpArrow() {
  const [isVisible, setVisible] = useState(false);
  
  useEffect(() => {
    document.addEventListener('scroll', function(e) {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }) 
  });

  function scrollTop(e) {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <button className={classNames('button', {'show': isVisible})} onClick={(e) => scrollTop(e)}></button>
  );
}
