const AllUsersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_USERS':
      return action.payload;

    default:
      return state;
  }
};
export default AllUsersReducer;
