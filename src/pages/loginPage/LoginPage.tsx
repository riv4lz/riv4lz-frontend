import React from 'react'
import Login from '../../components/login/Login'
import './loginPage.scss'
import Logo from '../../assets/images/Union.png'

const LoginPage = () => {
  return (
    <div className='Login_Container'>
      <div className='Login_Wrapper'>
        <Login />
        <div className='Login_Quotes_Container'>
          <div className='Login_Quotes_Wrapper'>
            <div className='Login_Quotes H3 Text_Secondary'>
              “YOUR PASSION IS ONLY
              A CLIMSE FROM BECOMING
              YOUR PROFESSION”
            </div>
            <div className='Login_Quotes_Logo H3 Text_Secondary'>
              <img src={Logo} alt=""></img> RIV4LZ
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage