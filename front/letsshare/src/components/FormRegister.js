import React, { useState } from 'react';
import axios from 'axios';
import '../styles/form.css'

function FormConnexion() {
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/users/register', {
        pseudo,
        email,
        password
      });
  
      console.log('User registered:', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Error registering user:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
    }
  };  

  return (
    <div id='form'>
      <div className="form">
        <div className="titles">
          <h1>LET'S</h1>
          <h3>SHARE</h3>
        </div>
        <div className='inputs' id='register'>
          <input type="text" placeholder='Username' value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
          <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='bouton'>
          <button onClick={handleRegister} id='login'>Register</button>
        </div>
        <div className='bottom'>
          <a href="#">I already have an account !</a>
        </div>
      </div>
    </div>
  );
}

export default FormConnexion;