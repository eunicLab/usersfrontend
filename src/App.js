import React, { useEffect } from 'react';
import './App.css';
import TableRow from './Components/TableRow';
import Details from './Components/Details';
import { useSelector, useDispatch } from 'react-redux';
import { sendAllUsers } from './actions';
import axios from 'axios';
import InputForm from './Components/InputForm';

let App = () => {
  useEffect(() => {
    getAllUsers();
  }, []);

  const allUsers = useSelector((state) => state.allUsers);
  const openDetails = useSelector((state) => state.openDetails);
  const updateError = useSelector((state) => state.updateError);

  const dispatch = useDispatch();

  // GET Request
  let getAllUsers = () => {
    axios.get('https://myuserbackend.herokuapp.com/users').then((response) => {
      dispatch(sendAllUsers(response.data.data));
    });
  };

  // Email validation
  let validateEmail = (emailInput) => {
    var emailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailInput.match(emailformat)) {
      return true;
    } else {
      return false;
    }
  };

  // Number validation
  let validateNumber = (phoneInput) => {
    var numbers = /^[0-9]+$/;
    if (phoneInput.match(numbers)) {
      return true;
    } else {
      return false;
    }
  };

  let allTableRows = allUsers.map((item) => (
    <TableRow
      item={item}
      key={item.id}
      validateEmail={validateEmail}
      validateNumber={validateNumber}
      getAllUsers={getAllUsers}
    />
  ));

  return (
    <div>
      <div className='jumbotron text-center'>
        <h1>Koch Media User Table</h1>
      </div>
      <InputForm
        getAllUsers={getAllUsers}
        validateEmail={validateEmail}
        validateNumber={validateNumber}
      />

      <div className='container' style={{ marginTop: '3%' }}>
        <p className='error text-center'>{updateError}</p>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>Mobile Number</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>{allTableRows}</tbody>
        </table>
      </div>
      <div className={openDetails ? 'container' : 'noDisplay'}>
        <Details />
      </div>
      <div class='jumbotron text-center' style={{ marginBottom: '0' }}></div>
    </div>
  );
};

export default App;
