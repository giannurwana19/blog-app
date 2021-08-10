import React from 'react';
import { RegisterBg } from '../../assets';
import './detailBlog.scss';

const DetailBlog = () => {
  return (
    <div className="detail-blog-wrapper">
      <img src={RegisterBg} className="img-cover" alt="thumb" />
      <p className="blog-title">Title blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Content Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Distinctio dolor temporibus labore in rerum, quos harum totam officiis
        ad, obcaecati a assumenda excepturi veritatis voluptatum itaque iure
        praesentium doloribus laborum!
      </p>
    </div>
  );
};

export default DetailBlog;
