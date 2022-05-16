import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './Login.scss';
import google from '../../assets/icons/social-media/google.svg'
import github from '../../assets/icons/social-media/github.svg'
import facebook from '../../assets/icons/social-media/facebook.svg'
import Btn from '../button/Btn';
import { useNavigate } from "react-router-dom";
import { useStore } from '../../Stores/store';

const Login = () => {
    let navigate = useNavigate()
    const { authStore } = useStore();

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')


    const test = () => {
        console.log("Success");
    }

    const loginText = () => {
        return "Sign in"
    }

    const loginRequest = async(user: any) => {
        await authStore.attemptLogin(user);

        if (authStore.user) {
            localStorage.setItem("token", authStore.user.token);
            console.log(authStore.getCurrentUser());
            
            navigate('/')
        }
    }

    const onSubmit = (e: any) => {
        loginRequest({ email, password })

        setEmail('')
        setPassword('')
    }

    return (
        <div className='Login_Div_Container'>
            <div className='Login_Div_Wrapper'>
                <div className='Login_Div_Header'>
                    <span className='H2 Text_Secondary'>Login</span>
                </div>
                <form className="add-form" onSubmit={onSubmit}>
                    <div className='Login_Div_Email'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Email</span>
                        <input type="text" className='Email_Input' placeholder='username@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='Login_Div_Email'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary'>Password</span>
                        <input type="password" className='Email_Input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className='Login_Div_ForgotPass'>
                        <Link to="/Login/ForgotPassword" className='Half_opacity Forgot_Password P4_Statewide_light Text_Secondary'>Forgot Password?</Link>
                    </div>
                    <div className='Login_Div_Signin'>
                        <Btn onClick={() => loginRequest({ email, password })} classes="Btn_Login P1_Statewide_Bold Text_Secondary" children="SIGN IN" />
                    </div>
                </form>
                <div className='Login_Div_Continue_Container'>
                    <div className='Login_Div_Continue_Title'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >or continue with</span>
                    </div>
                    <div className='Login_Div_Continue_Buttons_Container'>

                        <div className='Buttons'>
                            <img src={google}></img>
                        </div>
                        <div className='Buttons'>
                            <img src={github}></img>
                        </div>
                        <div className='Buttons'>
                            <img src={facebook}></img>
                        </div>

                        <div className='Login_Div_Continue_Register'>
                            <span className='Half_opacity P4_Statewide_light Text_Secondary'>Dont have an account yet? &nbsp;</span><Link className='Register P4_Statewide_Bold Text_Secondary' to="/Register"> Register for free</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login