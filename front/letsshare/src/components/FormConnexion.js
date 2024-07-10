import React, { useState } from 'react';
import axios from 'axios';
import '../styles/form.css'


function FormConnexion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/users/login', {
                email,
                password
            });

            console.log('Login successful:', response.data);
        } catch (error) {
            console.error('Error logging in:', error.response.data);
        }
    };

    return (
        <div id='form'>
            <div className="form">
                <div className="titles">
                    <h1>LET'S</h1>
                    <h3>SHARE</h3>
                </div>
                <div className='inputs'>
                    <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='bouton'>
                    <button onClick={handleLogin} id='login'>Login</button>
                </div>
                <div className='bottom'>
                    <a href="#">I don't have an account, let's create !</a>
                </div>
            </div>
        </div>
    );
}

export default FormConnexion;