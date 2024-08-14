import React from 'react';
import './login.css';

function Login() {
    return (
        <div className="container">
            <div className="login">
                <h1>Login</h1>
                <form>
                    <div className="login-item">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="login-item">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="login-item">
                        <button type="submit">Login</button>
                    </div>
                    <div className="login-item">
                        <button type="button" className="sign-up">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
