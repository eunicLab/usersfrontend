const SelectedRowReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SEND_SELECTED_ROW':
      return action.payload;

    default:
      return state;
  }
};
export default SelectedRowReducer;
