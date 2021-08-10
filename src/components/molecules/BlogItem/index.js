import React from 'react';
import { RegisterBg } from '../../../assets';
import './blogItem.scss';

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date post</p>
        <p className="body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          aspernatur obcaecati aliquam! Voluptas necessitatibus soluta velit
          quasi maxime facilis fugit veritatis minima natus nulla commodi,
          pariatur vero at culpa autem!
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
