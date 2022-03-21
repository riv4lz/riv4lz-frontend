import React from 'react'
import Login from '../../components/login/Login'
import './loginPage.scss'

const LoginPage = () => {
  return (
    <div className='Login_Container'>
    <div className='Login_Wrapper'>
      <Login />
        <div className='Login_Quotes_Container'>
            <div className='Login_Quotes_Wrapper'>
                <div className='Login_Quotes'>
                    QUOTES
                </div>
                <div className='Login_Quotes_Logo'>
                    <img src='LOGO' alt=""></img>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default LoginPage