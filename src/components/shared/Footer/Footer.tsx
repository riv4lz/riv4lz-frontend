import React from 'react'
import Logo from '../Logo/Logo'
import './Footer.scss'
import Facebook from '../../../assets/icons/social-media/Facebook_White.svg';
import Instagram from '../../../assets/icons/social-media/Instagram_White.svg';
import Twitter from '../../../assets/icons/social-media/Twitter_White.svg';
import Discord from '../../../assets/icons/social-media/Discord_White.svg';
import Telegram from '../../../assets/icons/social-media/Telegram_White.svg';
import Pubg from '../../../assets/images/pubg.png';
import Destiny from '../../../assets/images/Destiny.png';
import FreeFire from '../../../assets/images/FreeFire.png';
import NFS from '../../../assets/images/NFS.png';
import Sniper2 from '../../../assets/images/Sniper2.png';
import Witcher from '../../../assets/images/Witcher.png';

const Footer = () => {
    return (
        <div className='Footer_Container Flex Justify_Center Align_Center Text_Secondary'>
            <div className='Footer_Wrapper Grid Justify_Center Align_Center'>
                <div className='Footer_LogoDetails Component Flex Justify_Between'>
                    <div className='Title'>
                        <Logo />
                    </div>
                    <div className='Paragraph P4_Oxanium Medium '>
                        Warzone
                        Upropriate brand economca sound technolog after covalent technology encdable prospective wastng markets whereas propriate and brand economca sound technolog
                    </div>
                    <div className='Socials_Container Flex Justify_Between Align_Center'>
                        <img src={Facebook} alt="Facebook" />
                        <img src={Twitter} alt="Twitter" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={Discord} alt="Discord" />
                        <img src={Telegram} alt="Telegram" />

                    </div>
                </div>
                <div className='Footer_UsefullLinks Component'>
                    <div className='Title P0_Oxanium Bold'>Useful links</div>
                    <div className='Links Flex Justify_Evenly P3_Oxamium Semi_Bold'>
                        <a className='Text_Secondary' href='#'>About us</a>
                        <a className='Text_Secondary' href='#'>Games</a>
                        <a className='Text_Secondary' href='#'>Matches</a>
                        <a className='Text_Secondary' href='#'>Store</a>
                        <a className='Text_Secondary' href='#'>Blog</a>
                    </div>
                </div>
                <div className='Footer_SocialContact Component'>
                    <div className='Title P0_Oxanium Bold'>Social Contact</div>

                    <div className='Links Flex Justify_Evenly P3_Oxamium Semi_Bold'>
                        <a className='Text_Secondary' href='#'>Facebook</a>
                        <a className='Text_Secondary' href='#'>Twitter</a>
                        <a className='Text_Secondary' href='#'>instagram</a>
                        <a className='Text_Secondary' href='#'>Youtube</a>
                        <a className='Text_Secondary' href='#'>Github</a>
                    </div>
                </div>
                <div className='Footer_TBA Component'>
                    <div className='Title P0_Oxanium Bold'>TBA</div>
                    <div className='TBA_Games Grid Justify_Start Align_Center'>
                        <img src={Pubg} alt="Pubg" />
                        <img src={FreeFire} alt="FreeFire" />
                        <img src={Destiny} alt="Destiny" />
                        <img src={NFS} alt="NFS" />
                        <img src={Sniper2} alt="Sniper2" />
                        <img src={Witcher} alt="Witcher" />
                    </div>
                </div>
            </div>
            <div className='Copyright_Container Flex Justify_Center Align_Center P3_Oxanium Semi_Bold Text_Secondary'>
                © Copyright 2022. All Rights Reserved by Riv4lz ApS
            </div>
        </div>
    )
}

export default Footer