const initialState = {
  name: 'Gian',
};

const globalReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_NAME') {
    return {
      ...state,
      name: 'Nurwana',
    };
  }
  return state;
};

export default globalReducer;
