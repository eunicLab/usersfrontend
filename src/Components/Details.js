import React, { useState } from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { sendOpenDetails } from '../actions';

let Details = () => {
  const selectedRow = useSelector((state) => state.selectedRow);
  const dispatch = useDispatch();
  let handleCloseDetails = () => {
    dispatch(sendOpenDetails(false));
  };
  return (
    <div>
      <p className='detailsLabel'>Details</p>
      <div className='details'>
        <button
          type='button'
          className='close'
          aria-label='Close'
          onClick={handleCloseDetails}>
          <span aria-hidden='true'>&times;</span>
        </button>
        <p>Name: {selectedRow.name}</p>
        <p>Email Address: {selectedRow.email}</p>
        <p>Mobile Number: {selectedRow.phone}</p>
      </div>
    </div>
  );
};

export default Details;
