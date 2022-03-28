import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './Login.scss';
import google from '../../assets/icons/social-media/google.svg'
import github from '../../assets/icons/social-media/github.svg'
import facebook from '../../assets/icons/social-media/facebook.svg'
import Btn from '../button/Btn';
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate()

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')


    const test = () => {
        console.log("Success");
    }

    const loginText = () => {
        return "Sign in"
    }

    const loginRequest = async (user: any) => {
        const res = await fetch('https://localhost:7219/api/Caster/Login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await res.json()
        console.log(data);
        
        localStorage.setItem("user", JSON.stringify(data));
        if(localStorage.getItem("user")){
            navigate("../", {replace: true})
        }
            
        
        
    }

    const onSubmit = (e: any) =>{
        loginRequest({email, password})

        setEmail('')
        setPassword('')
    }

    return (
        <div className='Login_Div_Container'>
            <div className='Login_Div_Wrapper'>
                <div className='Login_Div_Header'>
                    <h2 className='H2 Text_Secondary'>Login</h2>
                </div>
                <form className="add-form" onSubmit={onSubmit}>
                    <div className='Login_Div_Email'>
                        <p className='Half_opacity P4_Statewide_light Text_Secondary' >Email</p>
                        <input type="text" className='Email_Input' placeholder='username@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='Login_Div_Password'>
                        <p className='Half_opacity P4_Statewide_light Text_Secondary'>Password</p>
                        <input type="password" className='Password_Input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className='Login_Div_ForgotPass'>
                        <Link to="/Login/ForgotPassword" className='Half_opacity Forgot_Password P4_Statewide_light Text_Secondary'>Forgot Password?</Link>
                    </div>

                    <div className='Login_Div_Signin'>
                        <Btn onClick={() => loginRequest({email, password})} children="TEST" />
                        <input value='Login' type='submit' ></input>
                    </div>
                </form>
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