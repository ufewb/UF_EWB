import React from 'react';
import '../login/login.css';
import loginBackground from '../../pictures/login/login-background.png';

function Login () {
    return (
        <div>
            <img src = {loginBackground} className = "loginBackground"></img>
            <div className = "login">
                <h1>Login</h1>
                <form>
                    <div class = "login-item">
                        <label for="username">Username</label>
                        <input type = "text" id = "username" name="username" required></input>
                    </div>
                    <div class = "login-item">
                        <label for="password">Password</label>
                        <input type = "text" id = "password" name="username" required></input>
                    </div>
                    <div class = "login-item">
                        <button type = "submit">Login</button>
                    </div>
                    <div class = "login-item">
                        <button type = "sign-up">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

