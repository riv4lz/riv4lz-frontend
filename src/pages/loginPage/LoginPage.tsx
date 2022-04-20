import React from 'react'
import Login from '../../components/login/Login'
import './LoginPage.scss'
import Quote from '../../components/login/quote/Quote'

const LoginPage = () => {
  return (
    <div className='Login_Container'>
      <div className='Login_Wrapper'>
        <Quote quote="YOUR PASSION IS ONLY A CLIMSE FROM BECOMING YOUR PROFESSION"/>
        <Login />
      </div>
    </div>
  )
}

export default LoginPage