export const sendSelectedRow = (detail) => {
  return {
    type: 'SEND_SELECTED_ROW',
    payload: detail,
  };
};
export const sendAllUsers = (detail) => {
  return {
    type: 'ALL_USERS',
    payload: detail,
  };
};

export const sendClickedRow = (detail) => {
  return {
    type: 'CLICKED_ROW',
    payload: detail,
  };
};

export const sendOpenDetails = (detail) => {
  return {
    type: 'OPEN_DETAILS',
    payload: detail,
  };
};

export const sendUpdateError = (detail) => {
  return {
    type: 'UPDATE_ERROR',
    payload: detail,
  };
};
