import React from 'react';
import { Button, Gap, Input, TextArea, Upload } from '../../components';
import './createBlog.scss';

const CreateBlog = () => {
  return (
    <div className="blog-post">
      <p className="title">Create New Blog</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default CreateBlog;
