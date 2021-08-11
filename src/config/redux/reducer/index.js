import { combineReducers } from 'redux';
import createBlogReducer from './createBlogReducer';
import globalReducer from './globalReducer';
import homeReducer from './homeReducer';

const reducer = combineReducers({
  homeReducer,
  globalReducer,
  createBlogReducer,
});

export default reducer;
