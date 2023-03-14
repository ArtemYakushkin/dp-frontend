import React from 'react';
import './register.css';

export const Register = () => {
    return (
        <div className='register'>
            <div className='registerWrapper'>
                <div className="registerLeft">
                    <span className="logo">D<span className="logo-word">ear</span> P<span className="logo-word">enfriend</span></span>
                    <span className='registerDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perferendis! Qui a perspiciatis ducimus perferendis nobis maiores doloremque rem omnis voluptatem! Qui maxime atque voluptatem molestiae beatae quas ratione voluptatum?</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input type="text" placeholder='Username' className='registerInput' />
                        <input type="email" placeholder='Email' className='registerInput' />
                        <input type="password" placeholder='Password' className='registerInput' />
                        <button className='registerBtn'>Sign Up</button>
                        <button className='registerRegBtn'>Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}