import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BlogItem, Button, Gap } from '../../components';
import './home.scss';

const Home = () => {
  const history = useHistory();
  const [dataBlog, setDataBlog] = useState([]);
  const stateGlobal = useSelector(state => state);

  console.log('state global', stateGlobal);

  useEffect(() => {
    axios
      .get('http://localhost:4000/v1/blog/posts')
      .then(({ data }) => {
        setDataBlog(data.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="+ Create Blog"
          onClick={() => history.push('/create-blog')}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map(blog => (
          <BlogItem
            key={blog._id}
            image={`http://localhost:4000/${blog.image}`}
            title={blog.title}
            body={blog.body}
            name={blog.author.name}
            date={blog.createdAt}
          />
        ))}
      </div>
      <Gap height={20} />
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
