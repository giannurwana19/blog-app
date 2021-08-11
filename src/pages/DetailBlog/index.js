import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Link } from '../../components/atoms';
import './detailBlog.scss';

const DetailBlog = props => {
  const [data, setData] = useState({});
  const history = useHistory();

  useEffect(() => {
    const id = props.match.params.id;

    axios
      .get(`${process.env.REACT_APP_URL}/v1/blog/post/${id}`)
      .then(({ data }) => {
        setData(data.data);
      })
      .catch(err => console.log(err));
  }, [props]);

  if (!data.author) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="detail-blog-wrapper">
      <img
        src={`${process.env.REACT_APP_URL}/${data.image}`}
        className="img-cover"
        alt="thumb"
      />
      <p className="blog-title">{data.title}</p>
      <p className="blog-author">
        {data.author.name} - {data.createdAt}
      </p>
      <p className="blog-body">{data.body}</p>
      <Link title="Kembali ke Home" onClick={() => history.push('/')} />
    </div>
  );
};

export default withRouter(DetailBlog);
