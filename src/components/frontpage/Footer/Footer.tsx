import React from 'react'
import './Footer.scss'
import Facebook from '../../../assets/icons/social-media/Facebook_White.svg'
import Twitter from '../../../assets/icons/social-media/Twitter_White.svg'
import Instagram from '../../../assets/icons/social-media/Instagram_White.svg'
import Discord from '../../../assets/icons/social-media/Discord_White.svg'
import Telegram from '../../../assets/icons/social-media/Telegram_White.svg'
import Btn from '../../button/Btn'
import { Link } from 'react-router-dom'

const Footer = () => {

    const onSubmitEmail = () => {
        console.log('submit email')
    }

    return (
        <div className='footer_Container'>
            <div className='footer_Wrapper'>
                <div className='footer_Title H2 Text_Secondary'>
                    DO YOU HAVE SUGGESTIONS?
                </div>
                <div className='footer_Paragraph'>
                    <span className='P3_Poppins Text_Secondary'>We are always open for feedback from our community, afterall we are building this for </span>
                    <span className='H3_Poppins Text_Primary'>YOU</span>
                </div>

                <div className='footer_ComponentContainer'>
                    <div className='footer_ContactContainer'>
                        <div className='contact_Title H3 Text_Secondary'>
                            Contact us
                        </div>
                        <div className='contact_Paragraph P4_Poppins Text_Secondary'>
                            Please dont hesitate to contact us with any and all feedback we want to imrprove our platform for your user experience always.
                        </div>
                    </div>
                    <div className='media_ButtonsContainer'>
                        <a href='https://facebook.com'>
                            <img src={Facebook} alt='facebook' />
                        </a>
                        <img src={Twitter} alt='Twitter' />
                        <img src={Instagram} alt='Instagram' />
                        <img src={Discord} alt='Discord' />
                        <img src={Telegram} alt='Telegram' />
                    </div>
                </div>
                <div className='footer_Title '>
                    <span className='H2 Text_Secondary'>Would you like to stay</span>
                    <span className='H1 Text_Primary'> 100% </span>
                    <span className='H2 Text_Secondary'>up to date</span>
                </div>
                <div className='footer_Paragraph P3_Poppins Text_Secondary'>
                    Sign up to our newspaper to receive the latest news and participate in our giveaways
                </div>

                <div className='footer_ComponentContainer'>
                    <div className='footer_ContactContainer'>
                        <div className='contact_Title H3 Text_Secondary'>
                            Stay in the loop
                        </div>
                        <div className='contact_Paragraph P4_Poppins Text_Secondary'>
                            Subscribe to receive the latest news and updates about TDA.
                            We promise not to spam you!
                        </div>
                    </div>
                    <div className='email_Inputfield'>
                        <div className='input_Container'>
                            <input className='email_Input' type='text' placeholder='Enter your email' />
                            <Btn classes='btn_emailNewsLetter' onClick={onSubmitEmail} children='Continue' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer