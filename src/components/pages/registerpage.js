import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./register.css"

const RegistrationForm = () => {
  // State variables to hold form data
  const [UserName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle form submission
    console.log('Form submitted:', { UserName, email, password });
    // Reset form fields after submission
    setUserName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='register'>
      <h2>*Registration Form*</h2><br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">User Name:</label>
          <input
            type="text"
            id="UserName"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div><br></br>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div><br></br>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div><br></br>
        <Link to="/login"> <button type="submit">Register</button></Link>
       
      </form>
    </div>
  );
};

export default RegistrationForm;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "./register.css"

// const RegistrationForm = () => {
//   // State variables to hold form data and errors
//   const [userName, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validation logic
//     const errors = {};
//     if (!userName.trim()) {
//       errors.userName = 'User Name is required';
//     }
//     if (!email.trim()) {
//       errors.email = 'Email is required';
//     }
//     if (!password.trim()) {
//       errors.password = 'Password is required';
//     }
//     // Check for any errors
//     if (Object.keys(errors).length === 0) {
//       // You can add your logic here to handle form submission
//       console.log('Form submitted:', { userName, email, password });
//       // Reset form fields after submission
//       setUserName('');
//       setEmail('');
//       setPassword('');
//       // Redirect to login page after successful registration
//       // window.location.href = '/login';
//     } else {
//       setErrors(errors);
//     }
//   };

//   return (
//     <div className='register'>
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="fullName">User Name:</label>
//           <input
//             type="text"
//             id="userName"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             required
//           />
//           {errors.userName && <span className="error">{errors.userName}</span>}
//         </div><br></br>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div><br></br>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {errors.password && <span className="error">{errors.password}</span>}
//         </div><br></br>
//         <Link to="/login"> <button type="submit">Register</button></Link>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;

