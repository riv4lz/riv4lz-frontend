import React, { useEffect } from 'react'
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
  const {authStore} = useStore();

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
          <Link className='Links Text_Secondary P3_Oxanium Bold' style={{ opacity: location.pathname === '/Matches' ? "1" : "0.5" }} to='/Matches'>Matches</Link>
          <Link className='Links Text_Secondary P3_Oxanium Bold' style={{ opacity: location.pathname === '/Guide' ? "1" : "0.5" }} to='/Chat'>Guide</Link>
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
  const {authStore, casterStore} = useStore();
  const navigate = useNavigate();
  const onClick = () => {
    let isCaster = false;
    
    for(let i = 0; i < casterStore.casters.length; i++) {
      if(casterStore.casters[i].id === authStore.user?.id) {
        isCaster = true;
      }
    }
    navigate(isCaster ? '/Caster/'+ authStore.user?.id : '/Org/' + authStore.user?.id);
  }

  return (
    <div className='LoggedIn_Container Flex Justify_Center Align_Center'>
      <div className='LoggedIn_Wrapper Flex Justify_Center Align_Center'>
        <div className='information Flex Justify_End Align_Center'>
        <div className='username Flex Justify_End Align_Center P3_Oxanium Bold Text_Secondary'>
          {authStore.user !== undefined ? authStore.user.email: 'Loading...'}
        </div>
        <div className='Wallet_Wrapper Flex Justify_End Align_Center'>
          <div className='amount P3_Oxanium Bold Text_Primary'>$10</div>
          <div className='walleticon'><img src={Wallet} alt="Wallet" /></div>
        </div>
        </div>
        <div className='Profile_Pic' onClick={onClick}>
          <img src={Tricked} alt="Tricked" />
        </div>
      </div>
    </div>
  )
}

