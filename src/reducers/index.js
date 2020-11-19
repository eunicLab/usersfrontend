import { combineReducers } from 'redux';
import selectedRowReducer from './selectedRow';
import allUsersReducer from './allUsers';
import clickedRowReducer from './clickedRow';
import openDetailsReducer from './openDetails';
import updateErrorReducer from './updateError';

const allReducers = combineReducers({
  selectedRow: selectedRowReducer,
  allUsers: allUsersReducer,
  clickedRow: clickedRowReducer,
  openDetails: openDetailsReducer,
  updateError: updateErrorReducer,
});

export default allReducers;
