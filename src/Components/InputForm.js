import React, { useState } from 'react';
import axios from 'axios';

let InputForm = (props) => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [error, setError] = useState('');
  const [errorType, setErrorType] = useState('');

  let handleNameInput = (event) => {
    setNameInput(event.target.value);
  };

  let handleEmailInput = (event) => {
    setEmailInput(event.target.value);
  };

  let handlePhoneInput = (event) => {
    setPhoneInput(event.target.value);
  };

  let handleFormSumbit = (e) => {
    e.preventDefault();
    if (props.validateEmail(emailInput)) {
      if (props.validateNumber(phoneInput)) {
        // POST Request
        axios
          .post('https://myuserbackend.herokuapp.com/users', {
            name: nameInput,
            email: emailInput,
            phone: phoneInput,
          })
          .then((res) => {
            console.log('updated successfully');
            props.getAllUsers();
            setNameInput('');
            setEmailInput('');
            setPhoneInput('');
            setError('');
            setErrorType('');
          });
      } else {
        setError('Please enter only numberical characters for mobile number!');
        setErrorType('phone');
      }
    } else {
      setError('Please enter a valid email address!');
      setErrorType('email');
    }
  };

  return (
    <div class='container' style={{ marginLeft: '10%' }}>
      <form onSubmit={handleFormSumbit}>
        <p className='error'>{error}</p>
        <div className='form-group'>
          <label for='name'>Name:</label>
          <input
            class='form-control'
            id='name'
            value={nameInput}
            onChange={handleNameInput}
          />
        </div>
        <div className='form-group'>
          <label for='email'>Email Address:</label>
          <input
            class='form-control'
            id='email'
            value={emailInput}
            onChange={handleEmailInput}
            style={{ borderColor: errorType === 'email' ? 'red' : '' }}
          />
        </div>
        <div className='form-group'>
          <label for='phonenumber'>Mobile Number:</label>
          <input
            class='form-control'
            id='phonenumber'
            value={phoneInput}
            onChange={handlePhoneInput}
            style={{ borderColor: errorType === 'phone' ? 'red' : '' }}
          />
        </div>

        <button type='submit' class='btn btn-success '>
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
