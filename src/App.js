import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  return (
    <Router>
      <Routes> {/* Use <Routes> as the parent container */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/dashboard" element={token ? <Dashboard token={token} /> : 'Please login.'} />
      </Routes>
    </Router>
  );
};

export default App;
