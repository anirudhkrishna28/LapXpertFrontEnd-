import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function UserAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login
      try {
        const response = await axios.post('http://127.0.0.1:8000/user/login', {
          username,
          password
        });

        const data = response.data;
        console.log('Login success:', data);
        localStorage.setItem('username', data["user"]["username"]);
        localStorage.setItem('id', data["user"]["_id"]);
        setError('');
        navigate('/'); // Navigate to /add-shop after successful login
      } catch (error) {
        setError('Incorrect username or password');
        console.error('Login error:', error);
      }
    } else {
      // Registration
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      try {
        const response = await axios.post('http://127.0.0.1:8000/user/register', {
          username,
          password
        });

        const data = response.data;
        console.log('Registration success:', data);
        setSuccess(true);
        setError('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        navigate('/'); // Navigate to /add-shop after successful registration
      } catch (error) {
        setError('Registration failed');
        console.error('Registration error:', error);
      }
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccess(false);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'User Login' : 'User Registration'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {!isLogin && (
          <>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
          </>
        )}
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">Registration successful!</p>}
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button type="button" onClick={toggleMode}>
          {isLogin ? 'Register' : 'Login'}
        </button>
      </p>
    </div>
  );
}

export default UserAuth;