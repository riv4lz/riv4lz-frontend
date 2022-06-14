import React, { useState } from 'react'
import './LoggedInNavbar.scss';

import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";
import { useStore } from '../../../../stores/store';
import Wallet from '../../../../assets/icons/wallet.svg';
import {observer} from "mobx-react-lite";

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
    userStore.user = {
      id: '',
      name: '',
      userType: 0,
      description: '',
      profileImageUrl: '',
      bannerImageUrl: '',
      facebookUrl: '',
      twitterUrl: '',
      discordUrl: '',
      twitchUrl: '',
      websiteUrl: ''
    };
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
            <img src={userStore.user?.profileImageUrl !== undefined && userStore.user.profileImageUrl !== '' ? userStore.user?.profileImageUrl : 'https://i.imgur.com/sH2IN1A_d.webp?maxwidth=760&fidelity=grand'} className="ProfileDetails__ProfileImage_Image" />
          </div>
        </div>
        {isOpen ?
          <div className='[ Dropdown ]'>
            <div onClick={onClickProfile} className='Dropdown__option    { p2 font-oxanium display-flex justify-content-flex-end align-items-center cursor-pointer }'>
              <div className='Dropdown__option__text' >
                Profile
              </div>
            </div>
            <div  onClick={logout} className='Dropdown__Logout     { p2 font-oxanium display-flex justify-content-flex-end align-items-center cursor-pointer }'>
              <div className='Dropdown__option__text'>
                Logout
              </div>
            </div>
          </div>
          : null}
      </div>
    </>
  )
}
export default observer(LoggedInNavbar)

