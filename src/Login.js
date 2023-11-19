// Login.js (React component)
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement login logic here
        console.log('Logging in with:', username, password);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default Login;
