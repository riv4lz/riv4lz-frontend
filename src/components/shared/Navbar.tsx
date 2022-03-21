import React from 'react'
import './Navbar.scss';
import '../../styles/typography.scss';
import logo from '../../assets/images/Union.png';

import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

  return (
    <div className='Navbar_Container'>
        <div className='Navbar_Wrapper'>
            <div className='Navbar_Links_Left'>
                  <Link className='links Text_Secondary P4_Statewide_Bold' style={{ opacity: location.pathname === '/' ? "1" : "0.5" }} to='/'>Home</Link>
                <Link className='links Text_Secondary P4_Statewide_Bold' style={{opacity: location.pathname ==='/Matches' ? "1" : "0.5"}} to='/Matches'>Matches</Link>
                <Link className='links Text_Secondary P4_Statewide_Bold' style={{opacity: location.pathname ==='/Guide' ? "1" : "0.5"}} to='/Guide'>Guide</Link>
            </div>
            <Link to='/'>
            <div className='Navbar_Logo'>
                <img src={logo} alt="logo" />
                </div>
            </Link>
            <div className='Navbar_Links_Right'>
                <Link className='links Text_Secondary P4_Statewide_Bold' style={{opacity: location.pathname ==='/About' ? "1" : "0.5"}} to='/About'>About</Link>
                <Link className='links Text_Secondary P4_Statewide_Bold'style={{opacity: location.pathname ==='/Contact' ? "1" : "0.5"}} to='/Contact'>Contact</Link>
                <Link className='links Text_Primary P4_Statewide_Bold' to='/Login'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar