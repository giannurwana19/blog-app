import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BlogItem, Button, Gap } from '../../components';
import axios from 'axios';
import './home.scss';

const Home = () => {
  const history = useHistory();
  const { dataBlog } = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/v1/blog/posts`)
      .then(({ data }) => {
        dispatch({ type: 'UPDATE_DATA_BLOG', payload: data.data });
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
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map(blog => (
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

// * kombinasi reducer
// disini kita menspesifikasikan untuk memanggil homeReducer saja
// const stateGlobal = useSelector(state => state.homeReducer);
