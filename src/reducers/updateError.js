const updateErrorReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_ERROR':
      return action.payload;

    default:
      return state;
  }
};
export default updateErrorReducer;
