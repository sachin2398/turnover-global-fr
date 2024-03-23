import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './OtpBox.css';

const OtpBox = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '', '', '']); // Array to store OTP digits
  const navigate = useNavigate(); // Hook to navigate between pages
  const inputRefs = useRef([]); // Ref to hold references to input fields

  useEffect(() => {
    // Display OTP alert when component mounts
    alert('Your OTP is 12345678');
    // Focus on the first input field when component mounts
    inputRefs.current[0].focus();
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp === '12345678') {
      // Redirect to login page if OTP is correct
      alert('OTP Verified. Redirecting to login page...');
      navigate('/login'); // Redirect to the login page
    } else {
      // Show alert for invalid OTP
      alert('Invalid OTP. Please enter the correct OTP.');
    }
  };

  // Function to handle OTP input change
  const handleOtpInputChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move focus to the next input field if digit entered is valid
    if (index < 7 && value.match(/^\d$/)) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className='otp'>
      <div className='otp-box'>
        <form onSubmit={handleSubmit}>
          <div className='otp-box-title'>
            <p>Create Your Account</p>
          </div>
          <div className='otp-box-email-text'>
            <p>Enter the 8 digit code you have received on</p>
            <p>anu***@gmail.com</p>
          </div>

          <div className='otp-input-container'>
            <div>
              <div>
                <label htmlFor="otp">Code</label>
              </div>
              <div className='box-otp-direction'>
                {otp.map((digit, index) => (
                  <div key={index}>
                    <input
                      ref={(ref) => (inputRefs.current[index] = ref)} // Assign ref to input field
                      type='text'
                      id={`otp-${index + 1}`}
                      maxLength='1'
                      value={digit}
                      onChange={(e) => handleOtpInputChange(index, e.target.value)}
                      className='otp-input-field'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button type='submit'>VERIFY</button>
        </form>
      </div>
    </div>
  );
};

export default OtpBox;
