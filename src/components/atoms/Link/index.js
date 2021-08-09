import React from 'react';
import './link.scss';

const Link = ({ title, onClick }) => {
  return (
    <p className="link" onClick={onclick}>
      {title}
    </p>
  );
};

export default Link;
