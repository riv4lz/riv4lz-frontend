import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import google from '../../assets/icons/social-media/google.svg'
import github from '../../assets/icons/social-media/github.svg'
import facebook from '../../assets/icons/social-media/facebook.svg'
import Btn from '../button/Btn';
import { useNavigate } from "react-router-dom";
import { useStore } from '../../Stores/store';

const Login = () => {
    let navigate = useNavigate()
    const { authStore, userStore } = useStore();

    const [email, setEmail] = useState('')
    const [path, setPath] = useState('')

    const [password, setPassword] = useState('')

    const loginRequest = async (user: any) => {
        try {
            await authStore.attemptLogin(user);
            const loadedUser = await userStore.loadUser(authStore.user?.id);
            if (loadedUser.userType === 0) {
                authStore.isCaster = true;
                authStore.isOrg = false;
            } else {
                authStore.isCaster = false;
                authStore.isOrg = true;
            }

            if (authStore.user) {
                localStorage.setItem("token", authStore.user.token);

                navigate(path || "/");
            }
        } catch (e) {

        }
    }

    const onSubmit = (e: any) => {
        try {
            loginRequest({ email, password })

            setEmail('')
            setPassword('')
        } catch (e) {
        }
    }

    return (
        <div className='[ Login ]'>
            <div className='Login__Wrapper'>
                <div className='[ LoginHeader ]'>
                    <span className='{ h2 font-statewideBold clr-white }'>
                        Login
                    </span>
                </div>
                <form className="add-form" onSubmit={onSubmit}>
                    <div className='[ LoginInput ]'>
                        <span className='{ half-opacity font-statewideLight p4 clr-white }' >
                            Email
                        </span>
                        <input
                            className='LoginInput__Field'
                            type="text"
                            id="test"
                            placeholder='username@gmail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </div>
                    <div className='[ LoginInput ]'>
                        <span className='{ half-opacity font-statewideLight p4 clr-white }'>
                            Password
                        </span>
                        <input
                            className='LoginInput__Field'
                            type="password"
                            id='pass'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}>
                        </input>
                    </div>
                    <div className='[ LoginForgotPass ]'>
                        <Link to="/Login/ForgotPassword" className='LoginForgotPass__Line { half-opacity font-statewideLight p4 clr-white }'>
                            Forgot Password?
                        </Link>
                    </div>
                    <div className='[ LoginSignIn ]'>
                        <Btn
                            onClick={() => loginRequest({ email, password })}
                            classes="Btn_Login p1 font-statewideBold clr-white"
                            children="SIGN IN"
                        />
                    </div>
                </form>
                <div className='[ LoginContinueWith ]'>
                    <div className='LoginContinueWith__Title'>
                        <span className='{ half-opacity font-statewideLight p4 clr-white }' >or continue with</span>
                    </div>
                    <div className='LoginContinueWith__Buttons'>
                        <div className='Buttons'>
                            <img src={google}></img>
                        </div>
                        <div className='Buttons'>
                            <img src={github}></img>
                        </div>
                        <div className='Buttons'>
                            <img src={facebook}></img>
                        </div>

                        <div className='LoginContinueWith__Register'>
                            <span className='{ half-opacity font-statewideLight p4 clr-white }'>Dont have an account yet? &nbsp;</span>
                            <Link
                                id="register"
                                className='Register    { p4 font-statewideBold clr-white }'
                                to="/Register">
                                Register for free
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
