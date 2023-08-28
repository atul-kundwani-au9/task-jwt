import React, { useState } from 'react';
import api from './api';

const Signup = ({ history }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      const response = await api.post('/signup', formData);
      console.log('Signup successful', response.data);
      history.push('/login');
    } catch (error) {
      console.error('Signup error', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
