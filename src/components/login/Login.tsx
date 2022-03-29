import React from 'react';
import {BrowserRouter as Router, Link ,Route, Routes} from 'react-router-dom';
import './Login.scss';
import google from '../../assets/icons/social-media/google.svg'
import github from '../../assets/icons/social-media/github.svg'
import facebook from '../../assets/icons/social-media/facebook.svg'
import Btn from '../button/Btn';

const Login = () => {
    const test = () => {
        console.log("Success");
    }

    const loginText = () =>{
        return "Sign in"
    }

    return (
        <div className='Login_Div_Container'>
            <div className='Login_Div_Wrapper'>
                <div className='Login_Div_Header'>
                    <h2 className='H2 Text_Secondary'>Login</h2>
                </div>
                <div className='Login_Div_Email'>
                    <p className='Half_opacity P4_Statewide_light Text_Secondary' >Email</p>
                    <input type="email" className='Email_Input' placeholder='username@gmail.com'></input>
                </div>
                <div className='Login_Div_Password'>
                    <p className='Half_opacity P4_Statewide_light Text_Secondary'>Password</p>
                    <input type="password" className='Password_Input' placeholder='Password'></input>
                </div>
                <div className='Login_Div_ForgotPass'>
                    <Link to="/Login/ForgotPassword" className='Half_opacity Forgot_Password P4_Statewide_light Text_Secondary'>Forgot Password?</Link>
                </div>

                <div className='Login_Div_Signin'>
                    <Btn onClick={() => console.log("EEEEEEEEEE")} children="TEST" classes="Login_Button P1_Statewide_Bold Text_Secondary"/>
                </div>
                <div className='Login_Div_Continue_Container'>
                    <div className='Login_Div_Continue_Title'>
                    <p className='Half_opacity P4_Statewide_light Text_Secondary' >or continue with</p>
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
                            <p className='Half_opacity P4_Statewide_light Text_Secondary'>Dont have an account yet? &nbsp;</p><Link className='Register P4_Statewide_Bold Text_Secondary' to="/Register"> Register for free</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login