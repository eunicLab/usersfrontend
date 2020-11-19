const openDetailsReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_DETAILS':
      return action.payload;

    default:
      return state;
  }
};
export default openDetailsReducer;
