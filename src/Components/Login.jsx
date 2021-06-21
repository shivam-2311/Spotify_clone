import React from 'react'
import './Login.css'
import spotify from '../images/spotify.jpg'
import { loginUrl } from '../spotify';

const Login = () => {
    return (
        <>
            <div className="login">
                <img src={spotify} alt="logo" />
                <a href={loginUrl}>Login with Spotify</a>
            </div>

        </>
    )
}

export default Login
