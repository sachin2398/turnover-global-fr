import React, { useState } from 'react'
import "./SignupBox.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignupBox = () => {
   const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate();

const handleSubmitSignup = async (e) => {
  e.preventDefault();

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Check if name, email, and password are not empty
  if (!name.trim() || !email.trim() || !password.trim()) {
    alert('Please fill in all fields.');
    return;
  }

  try {
    const res = await axios.post('https://turnover-backend-1iax.onrender.com/signup', { name, email, password });
    console.log(res);
    navigate('/otp');
  } catch (error) {
    if (error.response.status === 409) {
      alert('User already registered.');
    } else {
      alert('Something went wrong. Please try again.');
    }
  }
};

  return (
     <div className='signup'>
      <div className='signup-box'>
       
                   
        <form onSubmit={handleSubmitSignup}>
           <div className='signup-box-title'>
  <p >Create Your Account</p>
        </div>
        <div >
            <label htmlFor="name">Name</label><br />
        <input type="text" name="username" placeholder="Enter" required value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
          <div>
            <label htmlFor="email">Email</label><br />
        <input type="email" name="email" placeholder="Enter" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

          <div>
            <label htmlFor="password">Password</label><br />
        <input type="text" name="plassword" placeholder="Enter" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        

          <button type='submit'  >CREATE ACCOUNT</button>
        
        <div className='form-bottom'>
          <p>Have an Account?</p>
          <p onClick={()=>{navigate('/login')}}>LOGIN</p>
        </div>
    </form>
      </div>
     
      
    </div>
  )
}

export default SignupBox
