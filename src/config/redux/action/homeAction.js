import axios from 'axios';

export const setDataBlog = page => dispatch => {
  axios
    .get(`${process.env.REACT_APP_URL}/v1/blog/posts?page=${page}&perPage=2`)
    .then(({ data }) => {
      dispatch({ type: 'UPDATE_DATA_BLOG', payload: data.data });
      dispatch({
        type: 'UPDATE_PAGE',
        payload: {
          currentPage: data.current_page,
          totalPage: Math.ceil(data.total_data / data.per_page),
        },
      });
    })
    .catch(err => console.log(err));
};
