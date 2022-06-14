import React from 'react'
import Logo from '../../Logo/Logo'
import './FooterMain.scss'
import Facebook from '../../../../assets/icons/social-media/Facebook_White.svg';
import Instagram from '../../../../assets/icons/social-media/Instagram_White.svg';
import Twitter from '../../../../assets/icons/social-media/Twitter_White.svg';
import Discord from '../../../../assets/icons/social-media/Discord_White.svg';
import Telegram from '../../../../assets/icons/social-media/Telegram_White.svg';
import Pubg from '../../../../assets/images/pubg.png';
import Destiny from '../../../../assets/images/Destiny.png';
import FreeFire from '../../../../assets/images/FreeFire.png';
import NFS from '../../../../assets/images/NFS.png';
import Sniper2 from '../../../../assets/images/Sniper2.png';
import Witcher from '../../../../assets/images/Witcher.png';
import {Link, useLocation} from "react-router-dom";

const FooterMain = () => {
    const location = useLocation();
    return (
        <div className='[ FooterMain ]    { display-flex flex-direction-column clr-white align-items-center background-color }'>
            <div className='[ FooterLogo ]    { display-flex align-items-center }'>
                <Link className='FooterLogo_Logo' to='/'>
                    <Logo />
                </Link>
            </div>
            <div className='[ FooterText ]'>
                <p>Revolutionising the journey to become a professional caster and a well established organisation in the e-sports industry</p>
            </div>
            <div className='[ FooterMenu ]    { display-flex align-items-center justify-content-center }'>
                <Link className='FooterMenu__Link    { clr-white p3 font-oxanium fw-900 }' style={{ opacity: location.pathname === '/' ? "1" : "0.5" }} to='/'>Home</Link>
                <Link className='FooterMenu__Link    { clr-white p3 font-oxanium fw-900 }' id='navMatches' style={{ opacity: location.pathname === '/Matches' ? "1" : "0.5" }} to='/Matches'>Matches</Link>
                <Link className='FooterMenu__Link    { clr-white p3 font-oxanium fw-900 }' style={{ opacity: location.pathname === '/Guide' ? "1" : "0.5" }} to='/Guide'>Guide</Link>
                <Link className='FooterMenu__Link    { clr-white p3 font-oxanium fw-900 }' style={{ opacity: location.pathname === '/About' ? "1" : "0.5" }} to='/About'>About</Link>
                <Link className='FooterMenu__Link    { clr-white p3 font-oxanium fw-900 }' style={{ opacity: location.pathname === '/Contact' ? "1" : "0.5" }} to='/Contact'>Contact</Link>
            </div>
            <div className={"[ FooterSocials ]"}>
                <a href="">
                    <img src={Facebook} className={"FooterSocials__Icon    { padding-right-1 }"}></img></a>
                <a href="">
                    <img src={Twitter} className={"FooterSocials__Icon     { padding-right-1 }"}></img></a>
                <a href="">
                    <img src={Instagram} className={"FooterSocials__Icon    { padding-right-1 }"}></img></a>
                <a href="">
                    <img src={Discord} className={"FooterSocials__Icon    { padding-right-1 }"}></img></a>
                <a href="">
                    <img src={Telegram} className={"FooterSocials__Icon     { padding-right-1 }"}></img></a>
            </div>

        </div>
    )
}

export default FooterMain
