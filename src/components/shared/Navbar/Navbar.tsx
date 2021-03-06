import React from 'react'
import './Navbar.scss';

import {
  Link,
  useLocation,
} from "react-router-dom";
import Logo from '../Logo/Logo';
import { useStore } from '../../../stores/store';
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
          {userStore.user.id !== undefined && userStore.user.id !== "" ? <LoggedInNavbar /> : <Link className='NavbarMenu__Links    { clr-darkblue p3 font-oxanium fw-900 display-flex justify-content-center align-items-center btn_Navlogin }' to='/Login'>Login</Link>}
        </div>
      </div>
    </div>
  )
}
export default observer(Navbar)


