// import React, { useState } from 'react'
// import './login.css'
// import { Link,useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import baseurl from '../../Api';
// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

  

//   const navigate = useNavigate();

//   const handleLogin = async(e) =>{
//     e.preventDefault();
   
//     const response =await axios.post(baseurl+'/login/loginview',{
//       username:username,
//       password:password,
//     } );
//     console.log(response)
    
//     if(response.data.success){
//       alert('Login successful');
//       navigate('/lan')
    
//     }
//     else
//   {
//     setError('Invalid Username or Password.Please try again.');
//   }

//   }

  
  

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form >
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}

//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}

//             required
//           />
//         </div>
//         <button onClick={handleLogin} type="submit">Login</button>
       
//         <Link to ={'/Signup'}>New users ?</Link>
        
//         {error &&<p style={{marginTop:9,color:'red'}}>{error}</p>}
//       </form>
//     </div>
//   )
// }

// export default Login






import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseurl from '../../Api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseurl}/login/loginview`, {
        username: username,
        password: password,
      });

      console.log(response);
      console.log(response.data);


      if (response.data.success) {
        alert('Login successful');

        // Check the role and navigate accordingly
        if (response.data.user.role === 'admin') {
          navigate('/Food');
        } else if (response.data.user.role === 'user') {
          navigate('/lan');
        } else {
          setError('Invalid role. Please contact support.');
        }
      } else {
        setError('Invalid Username or Password. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>

        <Link to="/Signup">New users?</Link>

        {error && <p style={{ marginTop: 9, color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;

