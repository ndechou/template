import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../../feats/studentSlices';

const AddStudentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addStudent({firstName, lastName, email}));
    setFirstName('');
    setLastName('');
    setEmail('');
    navigate('/students');
  };

  return (
    <form id='student-form' onSubmit={handleSubmit}>
      <h3>Add New Student Here:</h3>
      <label htmlFor='firstName'>Student First Name</label>
      <input
        name = 'firstName'
        value = {firstName}
        onChange = {(e) => setFirstName(e.target.value)}
      />
      <span></span>
      <label htmlFor='lastName'>Student Last Name</label>
      <input
        name = 'lastName'
        value = {lastName}
        onChange = {(e) => setLastName(e.target.value)}
      />
      <span></span>
      <label htmlFor='email'>Student Email</label>
      <input
        name = 'email'
        value = {email}
        onChange = {(e) => setEmail(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
};

export default AddStudentForm;