import axios from 'axios';

export const setForm = (formType, formValue) => {
  return { type: 'SET_FORM_DATA', formType, formValue };
};

export const setImagePreview = payload => {
  return { type: 'SET_IMG_PREVIEW', payload };
};

export const postToAPI = form => {
  const data = new FormData();
  data.append('title', form.title);
  data.append('body', form.body);
  data.append('image', form.image);

  axios
    .post(`${process.env.REACT_APP_URL}/v1/blog/post`, data, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
    .then(res => console.log('sukses', res))
    .catch(err => console.log(err));
};

export const updateToAPI = (form, id) => {
  const data = new FormData();
  data.append('title', form.title);
  data.append('body', form.body);
  data.append('image', form.image);

  axios
    .put(`${process.env.REACT_APP_URL}/v1/blog/post/${id}`, data, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
    .then(res => console.log('update sukses', res))
    .catch(err => console.log(err));
};
