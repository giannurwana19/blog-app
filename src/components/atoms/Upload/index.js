import React from 'react';
import { LoginBg } from '../../../assets';
import './upload.scss';

const Upload = () => {
  return (
    <div className="upload">
      <img src={LoginBg} className="preview" alt="preview" />
      <input type="file" />
    </div>
  );
};

export default Upload;
