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
import {observer} from "mobx-react-lite";
import LoggedInNavbar from "./LoggedInNavbar/LoggedInNavbar";

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
          {userStore.user.id !== undefined && userStore.user.id !== "" ? <LoggedInNavbar /> : <Link className='NavbarMenu__Links    { clr-darkblue p3 font-oxanium fw-900 display-flex justify-content-center align-items-center btn-nav-login }' to='/Login'>Login</Link>}
        </div>
      </div>
    </div>
  )
}
export default observer(Navbar)


