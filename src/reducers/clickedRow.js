const clickedRowReducer = (
  state = { id: '', email: '', name: '', phone: '' },
  action
) => {
  switch (action.type) {
    case 'CLICKED_ROW':
      return action.payload;

    default:
      return state;
  }
};
export default clickedRowReducer;
