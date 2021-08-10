import React from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterBg } from '../../../assets';
import { Button, Gap } from '../../atoms';
import './blogItem.scss';

const BlogItem = () => {
  const history = useHistory();

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
        <Gap height={20} />
        <Button
          title="View Detail"
          onClick={() => history.push('/detail-blog')}
        />
      </div>
    </div>
  );
};

export default BlogItem;
