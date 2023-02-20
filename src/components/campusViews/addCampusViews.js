import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCampus } from '../feats/campusSlices';

const AddCampusForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCampus({name, address, description}));
    setName('');
    setAddress('');
    setDescription('');
    navigate('/campuses');
  };

  return (
    <form id='campus-form' onSubmit={handleSubmit}>
    <h3>Add New Campus Here:</h3>
    <label htmlFor='name'>Campus Name</label>
    <input
      name = 'name'
      value = {name}
      onChange={(e) => setName(e.target.value)}
    />
    <span></span>
    <label htmlFor='address'>Campus Address</label>
    <input
      name = 'address'
      value = {address}
      onChange={(e) => setAddress(e.target.value)}
    />
    <span></span>
    <label htmlFor='description'>Campus Description</label>
    <input
      name = 'description'
      value = {description}
      onChange={(e) => setDescription(e.target.value)}
    />
    <button type='submit'>Submit</button>
  </form>
);
};

export default AddCampusForm;
