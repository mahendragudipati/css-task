// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     // Here you can implement your login logic, for simplicity, let's just check if both fields are filled
//     if (username !== '' && password !== '') {
//       setIsLoggedIn(true);
//       alert('Login Successful!');
//     } else {
//       alert('Please fill in both username and password.');
//     }
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <div>
//           <h1>Welcome, {username}!</h1>
//           <button onClick={() => setIsLoggedIn(false)}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <h2>Login</h2>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <br />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//           <Link to={"/"}><button onClick={handleLogin}>Login</button></Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./register.css"

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const history = useHistory();/

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your authentication logic goes here
    if (username === 'correct_username' && password === 'correct_password') {
      // Redirect to the dashboard page if login is successful
    //   history.push('/dashboard');
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div className='login'>
      <h2>Login</h2><br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div><br></br>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div><br></br>
       <Link to={"/"} ><button type="submit">Login</button></Link>
      </form>
      <p>
      </p>
    </div>
  );
};

export default LoginPage;
