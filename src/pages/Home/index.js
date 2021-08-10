import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BlogItem, Button, Gap } from '../../components';
import axios from 'axios';
import './home.scss';

const Home = () => {
  const history = useHistory();
  const { dataBlogs, name } = useSelector(state => state);
  const dispatch = useDispatch();
  // const [dataBlog, setDataBlog] = useState([]);

  console.log('data blog global', dataBlogs);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'UPDATE_NAME' });
    }, 3000);

    axios
      .get(`${process.env.REACT_APP_URL}/v1/blog/posts`)
      .then(({ data }) => {
        dispatch({ type: 'UPDATE_DATA_BLOG', payload: data.data });
        // setDataBlog(data.data);
      })
      .catch(err => console.log(err));
  }, [dispatch]);

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="+ Create Blog"
          onClick={() => history.push('/create-blog')}
        />
      </div>
      <p> {name}</p>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlogs.map(blog => (
          <BlogItem
            key={blog._id}
            image={`${process.env.REACT_APP_URL}/${blog.image}`}
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

// DOCS

// * kita destcuring state global dari store nya
// const stateGlobal = useSelector(state => state);
// const { dataBlogs, name } = useSelector(state => state);

// jadi kita gunakan state global
// dataBlog dan setDataBlog kita hapus
