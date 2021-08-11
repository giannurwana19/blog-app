import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components';
import {
  postToAPI,
  setForm,
  setImagePreview,
  updateToAPI,
} from '../../config/redux/action';
import axios from 'axios';
import './createBlog.scss';

const CreateBlog = props => {
  const history = useHistory();
  const params = useParams();
  const [isUpdate, setIsUpdate] = useState(false);
  const { form, imgPreview } = useSelector(state => state.createBlogReducer);
  const { title, body } = form;
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) {
      setIsUpdate(true);

      axios
        .get(`${process.env.REACT_APP_URL}/v1/blog/post/${params.id}`)
        .then(res => {
          const data = res.data.data;
          console.log('res', data);
          dispatch(setForm('title', data.title));
          dispatch(setForm('body', data.body));
          dispatch(
            setImagePreview(`${process.env.REACT_APP_URL}/${data.image}`)
          );
        })
        .catch(err => console.log(err));
    }
  }, [dispatch, params.id]);

  const onSubmit = () => {
    if (isUpdate) {
      console.log('update data');
      updateToAPI(form, params.id);
    } else {
      console.log('create data');
      postToAPI(form);
    }
  };

  const onImageUpload = e => {
    const file = e.target.files[0];

    dispatch(setForm('image', file));
    dispatch(setImagePreview(URL.createObjectURL(file)));
  };

  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={() => history.push('/')} />
      <p className="title">{isUpdate ? 'Update' : 'Create New'} Blog</p>
      <Input
        label="Post Title"
        value={title}
        onChange={e => dispatch(setForm('title', e.target.value))}
      />
      <Upload onChange={e => onImageUpload(e)} img={imgPreview} />
      <TextArea
        value={body}
        onChange={e => dispatch(setForm('body', e.target.value))}
      />
      <Gap height={20} />
      <div className="button-action">
        <Button title={isUpdate ? 'UPDATE' : 'SIMPAN'} onClick={onSubmit} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default CreateBlog;
