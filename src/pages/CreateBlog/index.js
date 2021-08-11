import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components';
import './createBlog.scss';

const CreateBlog = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = () => {
    console.log('title', title);
    console.log('body', body);
    console.log('image', image);

    const data = new FormData();
    data.append('title', title);
    data.append('body', body);
    data.append('image', image);

    axios
      .post(`${process.env.REACT_APP_URL}/v1/blog/post`, data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then(res => console.log('sukses', res))
      .catch(err => console.log(err));
  };

  const onImageUpload = e => {
    const file = e.target.files[0];

    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={() => history.push('/')} />
      <p className="title">Create New Blog</p>
      <Input
        label="Post Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Upload onChange={e => onImageUpload(e)} img={imagePreview} />
      <TextArea value={body} onChange={e => setBody(e.target.value)} />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" onClick={onSubmit} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default CreateBlog;
