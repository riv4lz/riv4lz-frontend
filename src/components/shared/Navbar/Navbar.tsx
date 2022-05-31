import React, { useEffect, useState } from 'react'
import './Navbar.scss';

import {
  BrowserRouter as Router,
  Link,
  Navigate,
  useLocation,
  useNavigate
} from "react-router-dom";
import Logo from '../Logo/Logo';
import { useStore } from '../../../stores/store';
import Wallet from '../../../assets/icons/wallet.svg';
import Tricked from '../../../assets/images/Esports-orgs/Tricked.svg';

const Navbar = (props: any) => {
  const location = useLocation();
  const { userStore } = useStore();

  return (
    <div className='[ Navbar ]    { flex-flow width-full }'>
      <div className='Navbar__Wrapper    { flex-flow width-content }'>
        <div className='[ NavbarLogo ]    { display-flex align-items-center }'>
          <Link className='NavbarLogo_Logo' to='/'>
            <Logo />
          </Link>
        </div>
        <div className='[ NavbarMenu ]    { display-flex align-items-center justify-content-flex-end }'>
          <Link className='NavbarMenu__Links    { clr-white p3 font-oxanium fw-900 }' style={{ opacity: location.pathname === '/' ? "1" : "0.5" }} to='/'>Home</Link>
          <Link className='NavbarMenu__Links    { clr-white p3 font-oxanium fw-900 }' id='navMatches' style={{ opacity: location.pathname === '/Matches' ? "1" : "0.5" }} to='/Matches'>Matches</Link>
          <Link className='NavbarMenu__Links    { clr-white p3 font-oxanium fw-900 }' style={{ opacity: location.pathname === '/Guide' ? "1" : "0.5" }} to='/Guide'>Guide</Link>
          <Link className='NavbarMenu__Links    { clr-white p3 font-oxanium fw-900 }' style={{ opacity: location.pathname === '/About' ? "1" : "0.5" }} to='/About'>About</Link>
          <Link className='NavbarMenu__Links    { clr-white p3 font-oxanium fw-900 }' style={{ opacity: location.pathname === '/Contact' ? "1" : "0.5" }} to='/Contact'>Contact</Link>
          {userStore.user.id !== undefined && userStore.user.id !== "" ? <LoggedInNavbar /> : <Link className='NavbarMenu__Links    { clr-darkblue p3 font-oxanium fw-900 display-flex justify-content-center align-items-center btn_Navlogin }' to='/Login'>Login</Link>}
        </div>
      </div>
    </div>
  )
}
export default Navbar

const LoggedInNavbar = () => {
  const { authStore, userStore } = useStore();
  const location = useLocation();
  const navigate = useNavigate();
  const onClick = () => {
    setIsOpen(!isOpen);
  }

  const onClickProfile = () => {
    navigate('/profile/' + authStore.user?.id);
  }

  const logout = () => {
    authStore.logout();
    window.location.reload();
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Link className='NavbarMenu__Links    { clr-white p3 font-oxanium fw-900 }' style={{ opacity: location.pathname === '/Chat' ? "1" : "0.5" }} to='/Chat'>Chat</Link>
      <div className='LoggedIn_Container    { flex-flow }' onClick={onClick}>
        <div className='LoggedIn_Wrapper    { flex-flow }'>
          <div className='information    { display-flex justify-content-flex-end align-items-center }'>
            <div className='username    { display-flex justify-content-flex-end align-items-center p3 font-oxanium fw-900 clr-white }'>
              {userStore.user !== undefined ? userStore.user.name : 'Loading...'}
            </div>
            <div className='Wallet_Wrapper    { display-flex justify-content-flex-end align-items-center }'>
              <div className='amount    { p3 font-oxanium fw-900 clr-white }'>$10</div>
              <div className='walleticon'><img src={Wallet} alt="Wallet" /></div>
            </div>
          </div>
          <div className='Profile_Pic'>
            <img src={userStore.user?.profileImageUrl !== undefined ? userStore.user?.profileImageUrl : 'https://i.imgur.com/sH2IN1A_d.webp?maxwidth=760&fidelity=grand'} className="ProfileDetails__ProfileImage_Image" />
          </div>
        </div>
        {isOpen ?
          <div className='[ Dropdown ]'>
            <div className='Dropdown__option    { p2 font-oxanium display-flex justify-content-flex-end align-items-center cursor-pointer }'>
              <div className='Dropdown__option__text' onClick={onClickProfile}>
                Profile
              </div>
            </div>
            <div className='Dropdown__Logout     { p2 font-oxanium display-flex justify-content-flex-end align-items-center cursor-pointer }'>
              <div className='Dropdown__option__text' onClick={logout}>
                Logout
              </div>
            </div>
          </div>
          : null}
      </div>
    </>
  )
}

