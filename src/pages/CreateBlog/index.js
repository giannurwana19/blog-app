import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components';
import { postToAPI, setForm, setImagePreview } from '../../config/redux/action';
import './createBlog.scss';

const CreateBlog = () => {
  const history = useHistory();
  const { form, imgPreview } = useSelector(state => state.createBlogReducer);
  const { title, body } = form;
  const dispatch = useDispatch();

  const onSubmit = () => {
    postToAPI(form);
  };

  const onImageUpload = e => {
    const file = e.target.files[0];

    dispatch(setForm('image', file));
    dispatch(setImagePreview(URL.createObjectURL(file)));
  };

  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={() => history.push('/')} />
      <p className="title">Create New Blog</p>
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
        <Button title="Save" onClick={onSubmit} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default CreateBlog;
