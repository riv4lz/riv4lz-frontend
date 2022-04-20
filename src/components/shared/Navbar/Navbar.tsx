import React, { useEffect } from 'react'
import './Navbar.scss';

import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import Logo from '../Logo/Logo';

const Navbar = (props: any) => {
  const location = useLocation();

  return (
    <div className='Navbar_Container Flex Align_Center Justify_Center Full_Width'>
      <div className='Navbar_Wrapper Flex Align_Center Justify_Center Content_Width'>
        <div className='Navbar_Logo Flex Align_Center '>
          <Link className='logo' to='/'>
            <Logo />
          </Link>
        </div>
        <div className='Navbar_Links Flex Align_Center Justify_End'>
          <Link className='Links Text_Secondary P4_Statewide_Bold' style={{ opacity: location.pathname === '/' ? "1" : "0.5" }} to='/'>Home</Link>
          <Link className='Links Text_Secondary P4_Statewide_Bold' style={{ opacity: location.pathname === '/Matches' ? "1" : "0.5" }} to='/Matches'>Matches</Link>
          <Link className='Links Text_Secondary P4_Statewide_Bold' style={{ opacity: location.pathname === '/Guide' ? "1" : "0.5" }} to='/Guide'>Guide</Link>
          <Link className='Links Text_Secondary P4_Statewide_Bold' style={{ opacity: location.pathname === '/About' ? "1" : "0.5" }} to='/About'>About</Link>
          <Link className='Links Text_Secondary P4_Statewide_Bold' style={{ opacity: location.pathname === '/Contact' ? "1" : "0.5" }} to='/Contact'>Contact</Link>
          <Link className='Links Text_Primary P4_Statewide_Bold' to='/Login'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar