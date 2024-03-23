import React, { useState } from 'react';
import './LoginBox.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginBox = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://turnover-backend-1iax.onrender.com/login', {
        email,
        password
      });
      if (res.status === 200) {
        const { token, msg } = res.data;
        if (msg === 'Login successful') {
          localStorage.setItem('userToken', token);
          setError('');
          alert('Login successful');
          navigate('/');
        } else {
          setError(msg);
        }
      } else {
        setError('Invalid response from server');
      }
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className='login'>
      <div className='login-box'>
        <form onSubmit={handleLogin}>
          <div className='login-box-title-1'>
            <p>Login</p>
          </div>
          <div className="login-box-title-2">
            <p>Welcome back to ECOMMERCE</p>
            <p>The next gen business marketplace</p>
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" placeholder="Enter" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-container password-input">
            <label htmlFor="password">Password</label>
            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter" required value={password} onChange={(e) => setPassword(e.target.value)} style={{height:"48px"}} />
            <span className="show-password" onClick={togglePasswordVisibility}>
              {showPassword ? <u>Hide</u> : <u>Show</u>}
            </span>
          </div>
          {error && <p className="error">{error}</p>}
          <button type='submit' className='form-button'>LOGIN</button>
          <hr className='break-line' />
          <div className='form-bottom'>
            <p>Don't have an Account?</p>
            <p onClick={()=>{navigate('/signup')}}>SIGN UP</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginBox;
