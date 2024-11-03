import React, { useState } from 'react';
import axios from 'axios';

// const Register = ({ onAuthSuccess }) => {
//   const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
//   const [otp, setOtp] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleRegisterChange = (e) => {
//     setRegisterData({ ...registerData, [e.target.name]: e.target.value });
//     setErrorMessage(''); // Clear error on input change
//   };

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send registration data to the backend
//       const response = await axios.post('http://localhost:8000/api/auth/signup', registerData);
//       onAuthSuccess(response.data.token); // Pass the token to the parent component
//       alert('You are now registered.');
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.message === 'User already exists') {
//         alert('User exists');
//       } else {
//         console.error('Registration failed:', err);
//         alert(err);
//       }
//     }
//   };

//   // const handleRegisterSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.post('http://localhost:8000/api/auth/signup', registerData);
//   //     alert('Registration successful! An OTP has been sent to your email.');
//   //     setIsOtpSent(true);
//   //   } catch (err) {
//   //     console.log(err)
//   //     if (err.response && err.response.data) {
//   //       if (err.response.data.message === 'User already exists') {
//   //         setErrorMessage('User already exists');
//   //       } else {
//   //         setErrorMessage(`Registration failed: ${err.response.data.message}`);
//   //       }
//   //     } else {
//   //       setErrorMessage('An unexpected error occurred. Please try again.');
//   //     }
//   //     console.error('Registration error:', err); // Log detailed error to console
//   //   }
//   // };
  


//   // const handleOtpSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.post('http://localhost:8000/api/auth/verify-otp', { email: registerData.email, otp });
//   //     onAuthSuccess(response.data.token); // Pass the token to the parent component
//   //     alert('OTP verified successfully! You are now registered.');
//   //   } catch (err) {
//   //     console.error('OTP verification failed:', err);
//   //     setErrorMessage('Invalid OTP. Please try again.'); // Display error message
//   //   }
//   // };

//   return (
//     <div>
//       <form onSubmit={handleRegisterSubmit}>
//         <h2>Register</h2>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={registerData.name}
//           onChange={handleRegisterChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={registerData.email}
//           onChange={handleRegisterChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={registerData.password}
//           onChange={handleRegisterChange}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
const Register = ({ onAuthSuccess }) => {
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth/signup', registerData);
      const token = response.data.token;

      const userResponse = await axios.get('http://localhost:8000/api/auth/user', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const userName = userResponse.data.name;

      if (onAuthSuccess && typeof onAuthSuccess === 'function') {
        onAuthSuccess(token, userName); // Pass token and userName to App
      }
      alert('Registration successful!');
    } catch (err) {
      console.log(err)
      console.error('Registration failed:', err);
      alert('User registration failed');
    }
  };

  return (
    <form onSubmit={handleRegisterSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={registerData.name}
        onChange={handleRegisterChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={registerData.email}
        onChange={handleRegisterChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={registerData.password}
        onChange={handleRegisterChange}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};


export default Register;
