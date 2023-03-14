import React from 'react';
import './login.css';

export const Login = () => {
    return (
        <div className='login'>
            <div className='loginWrapper'>
                <div className="loginLeft">
                    <span className="logo">D<span className="logo-word">ear</span> P<span className="logo-word">enfriend</span></span>
                    <span className='loginDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perferendis! Qui a perspiciatis ducimus perferendis nobis maiores doloremque rem omnis voluptatem! Qui maxime atque voluptatem molestiae beatae quas ratione voluptatum?</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" placeholder='Email' className='loginInput' />
                        <input type="password" placeholder='Password' className='loginInput' />
                        <button className='loginBtn'>Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className='loginRegBtn'>Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
