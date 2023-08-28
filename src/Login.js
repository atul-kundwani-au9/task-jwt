
import React, { useState } from 'react';
import api from './api';
import jwtDecode from 'jwt-decode';

const Login = ({ history, setToken }) => {
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

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', formData);
      const token = response.data.token;
      localStorage.setItem('token', token);
      setToken(token);
      const decodedToken = jwtDecode(token);
      console.log('Login successful', decodedToken);
      history.push('/dashboard');
    } catch (error) {
      console.error('Login error', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
