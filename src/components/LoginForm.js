import React, { useState } from 'react';
import { registerUser } from '../api'; // Import the API function
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({ username, password });
      setMessage(response.msg);

      // Reset form fields after successful registration
      if (response.success) { // Assuming your response contains a success flag
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      setMessage('Registration failed');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Register</h2>
        {message && <p>{message}</p>}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Register</button>
      </form>
    </div>
  );
};

export default LoginForm;
