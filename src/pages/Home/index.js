import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BlogItem, Button, Gap } from '../../components';
import { setDataBlog } from '../../config/redux/action';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';
import './home.scss';

const Home = () => {
  const history = useHistory();
  const {
    dataBlog,
    page: { currentPage, totalPage },
  } = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [dispatch, counter]);

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const next = () => {
    setCounter(counter === totalPage ? totalPage : counter + 1);
  };

  const confirmDelete = id => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Apakah Anda yakin akan menghapus post ini?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios
              .delete(`${process.env.REACT_APP_URL}/v1/blog/post/${id}`)
              .then(res => {
                console.log('sukses delete', res.data);
                dispatch(setDataBlog(counter));
              })
              .catch(err => console.log(err));
          },
        },
        {
          label: 'No',
          onClick: () => console.log('User tidak setuju'),
        },
      ],
    });
  };

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
            _id={blog._id}
            onDelete={confirmDelete}
          />
        ))}
      </div>

      <Gap height={20} />
      <div className="pagination">
        {counter > 1 && <Button title="Previous" onClick={previous} />}
        <Gap width={20} />
        <p className="text-page">
          {currentPage} / {totalPage}
        </p>
        <Gap width={20} />
        {counter !== totalPage && <Button title="Next" onClick={next} />}
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
