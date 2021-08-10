import axios from 'axios';

export const setDataBlog = () => dispatch => {
  axios
    .get(`${process.env.REACT_APP_URL}/v1/blog/posts`)
    .then(({ data }) => {
      dispatch({ type: 'UPDATE_DATA_BLOG', payload: data.data });
    })
    .catch(err => console.log(err));
};
