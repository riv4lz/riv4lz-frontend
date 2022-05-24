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
import { useStore } from '../../../Stores/store';
import Wallet from '../../../assets/icons/wallet.svg';
import Tricked from '../../../assets/images/Esports-orgs/Tricked.svg';

const Navbar = (props: any) => {
  const location = useLocation();
  const { authStore } = useStore();

  return (
    <div className='Navbar_Container Flex Align_Center Justify_Center Full_Width'>
      <div className='Navbar_Wrapper Flex Align_Center Justify_Center Content_Width'>
        <div className='Navbar_Logo Flex Align_Center '>
          <Link className='logo' to='/'>
            <Logo />
          </Link>
        </div>
        <div className='Navbar_Links Flex Align_Center Justify_End'>
          <Link className='Links Text_Secondary P3_Oxanium Bold' style={{ opacity: location.pathname === '/' ? "1" : "0.5" }} to='/'>Home</Link>
          <Link className='Links Text_Secondary P3_Oxanium Bold' id='navMatches' style={{ opacity: location.pathname === '/Matches' ? "1" : "0.5" }} to='/Matches'>Matches</Link>
          <Link className='Links Text_Secondary P3_Oxanium Bold' style={{ opacity: location.pathname === '/Guide' ? "1" : "0.5" }} to='/Guide'>Guide</Link>
          <Link className='Links Text_Secondary P3_Oxanium Bold' style={{ opacity: location.pathname === '/About' ? "1" : "0.5" }} to='/About'>About</Link>
          <Link className='Links Text_Secondary P3_Oxanium Bold' style={{ opacity: location.pathname === '/Contact' ? "1" : "0.5" }} to='/Contact'>Contact</Link>
          {authStore.user !== undefined ? <LoggedInNavbar /> : <Link className='Links Text_Dark_Blue P3_Oxanium Bold Flex Justify_Center Align_Center btn_Navlogin' to='/Login'>Login</Link>}
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
    navigate(authStore.isCaster ? '/Caster/' + authStore.user?.id : '/Org/' + authStore.user?.id);
  }

  const logout = () => {
    authStore.logout();
    window.location.reload();
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Link className='Links Text_Secondary P3_Oxanium Bold' style={{ opacity: location.pathname === '/Chat' ? "1" : "0.5" }} to='/Chat'>Chat</Link>
      <div className='LoggedIn_Container Flex Justify_Center Align_Center' onClick={onClick}>
        <div className='LoggedIn_Wrapper Flex Justify_Center Align_Center'>
          <div className='information Flex Justify_End Align_Center'>
            <div className='username Flex Justify_End Align_Center P3_Oxanium Bold Text_Secondary'>
              {userStore.user !== undefined ? userStore.user.name : 'Loading...'}
            </div>
            <div className='Wallet_Wrapper Flex Justify_End Align_Center'>
              <div className='amount P3_Oxanium Bold Text_Primary'>$10</div>
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

