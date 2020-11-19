import React, { useState } from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  sendSelectedRow,
  sendClickedRow,
  sendOpenDetails,
  sendUpdateError,
} from '../actions';
import axios from 'axios';

let TableRow = (props) => {
  const dispatch = useDispatch();
  const clickedRow = useSelector((state) => state.clickedRow);
  const [updateButton, setUpdateButton] = useState('Update');

  let handleRead = (e) => {
    e.stopPropagation();
    dispatch(
      sendSelectedRow({
        name: props.item.name,
        email: props.item.email,
        phone: props.item.phone,
        id: props.item.id,
      })
    );
    dispatch(sendOpenDetails(true));
  };

  let handleRowClick = (e) => {
    dispatch(
      sendClickedRow({
        id: props.item.id,
        name: props.item.name,
        email: props.item.email,
        phone: props.item.phone,
      })
    );
  };

  let handleUpdate = (e) => {
    e.stopPropagation();
    let userName = document.getElementById(`userName${props.item.id}`);
    let userEmail = document.getElementById(`userEmail${props.item.id}`);
    let userPhone = document.getElementById(`userPhone${props.item.id}`);

    switch (updateButton) {
      case 'Update':
        setUpdateButton('Save');
        userName.contentEditable = 'true';
        userEmail.contentEditable = 'true';
        userPhone.contentEditable = 'true';

        break;
      case 'Save':
        if (props.validateEmail(userEmail.innerHTML)) {
          if (props.validateNumber(userPhone.innerHTML)) {
            setUpdateButton('Update');
            userName.contentEditable = 'false';
            userEmail.contentEditable = 'false';
            userPhone.contentEditable = 'false';

            //http PATCH Request
            axios
              .patch(
                `https://myuserbackend.herokuapp.com/users/${props.item.id}`,
                {
                  name: userName.innerHTML,
                  email: userEmail.innerHTML,
                  phone: userPhone.innerHTML,
                }
              )
              .then((res) => {
                props.getAllUsers();
                dispatch(sendUpdateError(''));
              });
          } else {
            dispatch(
              sendUpdateError(
                'Please enter only numberical characters for mobile number!'
              )
            );
          }
        } else {
          dispatch(sendUpdateError('Please Enter a valid Email Address!'));
        }
        break;
      default:
    }
  };
  let handleDelete = (e) => {
    e.stopPropagation();
    //http DELETE request
    axios
      .delete(`https://myuserbackend.herokuapp.com/users/${props.item.id}`, {
        params: { id: props.item.id },
      })
      .then((res) => {
        props.getAllUsers();
      });
  };

  return (
    <tr
      id='tableRow'
      style={{ backgroundColor: props.item.id === clickedRow.id ? 'blue' : '' }}
      onClick={handleRowClick}>
      <td
        id={`userName${props.item.id}`}
        className={props.item.id === clickedRow.id ? 'white' : 'black'}>
        {props.item.name}
      </td>
      <td
        id={`userEmail${props.item.id}`}
        className={props.item.id === clickedRow.id ? 'white' : 'black'}>
        {props.item.email}
      </td>
      <td
        id={`userPhone${props.item.id}`}
        className={props.item.id === clickedRow.id ? 'white' : 'black'}>
        {props.item.phone}
      </td>
      <td>
        <button className='btn btn-default readButton' onClick={handleRead}>
          Read
        </button>
        <button className='btn btn-success' onClick={handleUpdate}>
          {updateButton}
        </button>
        <button className='btn btn-danger' onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
