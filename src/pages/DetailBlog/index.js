import React from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterBg } from '../../assets';
import { Link } from '../../components/atoms';
import './detailBlog.scss';

const DetailBlog = () => {
  const history = useHistory();

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
      <Link title="Kembali ke Home" onClick={() => history.push('/')} />
    </div>
  );
};

export default DetailBlog;
