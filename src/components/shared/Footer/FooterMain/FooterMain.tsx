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

const FooterMain = () => {
    return (
        <div className='[ FooterMain ]    { flex-flow clr-white }'>
            <div className='FooterMain_Wrapper    { display-grid justify-content-center align-items-center }'>
                <div className='[ LogoAndDetails ] Component    { display-flex justify-content-space-between }'>
                    <div className='Title'>
                        <Logo />
                    </div>
                    <div className='Paragraph    { p4 font-oxanium fw-300 '>
                        Warzone
                        Upropriate brand economca sound technolog after covalent technology encdable prospective wastng markets whereas propriate and brand economca sound technolog
                    </div>
                    <div className='Socials_Container    { display-flex justify-content-space-between align-items-center }'>
                        <img src={Facebook} alt="Facebook" />
                        <img src={Twitter} alt="Twitter" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={Discord} alt="Discord" />
                        <img src={Telegram} alt="Telegram" />

                    </div>
                </div>
                <div className='[ UsefulLinks ] Component'>
                    <div className='Title    { p0 font-oxanium fw-900 }'>Useful links</div>
                    <div className='FooterLinks    { display-flex justify-content-space-evenly p3 font-oxanium fw-600 }'>
                        <a className='{ clr-secondary' href='#'>About us</a>
                        <a className='{ clr-secondary' href='#'>Games</a>
                        <a className='{ clr-secondary' href='#'>Matches</a>
                        <a className='{ clr-secondary' href='#'>Store</a>
                        <a className='{ clr-secondary' href='#'>Blog</a>
                    </div>
                </div>
                <div className='[ SocialContact ] Component'>
                    <div className='Title    { p0 font-oxanium fw-900 }'>Social Contact</div>

                    <div className='FooterLinks    { display-flex justify-content-space-evenly p3 font-oxanium fw-600 }'>
                        <a className='{ clr-secondary' href='#'>Facebook</a>
                        <a className='{ clr-secondary' href='#'>Twitter</a>
                        <a className='{ clr-secondary' href='#'>instagram</a>
                        <a className='{ clr-secondary' href='#'>Youtube</a>
                        <a className='{ clr-secondary' href='#'>Github</a>
                    </div>
                </div>
                <div className='[ Photos ] Component'>
                    <div className='Title    { p0 font-oxanium fw-900 }'>TBA</div>
                    <div className='TBA_Games    { display-grid justify-content-flex-start align-items-center'>
                        <img src={Pubg} alt="Pubg" />
                        <img src={FreeFire} alt="FreeFire" />
                        <img src={Destiny} alt="Destiny" />
                        <img src={NFS} alt="NFS" />
                        <img src={Sniper2} alt="Sniper2" />
                        <img src={Witcher} alt="Witcher" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMain
