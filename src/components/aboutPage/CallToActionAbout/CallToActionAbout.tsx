import React from 'react'
import { Link, Route, useNavigate } from 'react-router-dom'
import Btn from '../../button/Btn'
import './CallToActionAbout.scss'

const CallToActionAbout = () => {
    const navigate = useNavigate();

    const onBecomMember = () => {
        console.log("test");
    }

    const onFeatures = () => {
        navigate('#Features');
    }

    return (
        <div className='CallToActionAbout'>
            <div className='CallToActionAbout__Wrapper'>
                <div className='CallToActionAbout__Wrapper__MainSection'>
                    <div className='CallToActionAbout__Wrapper__MainSection__Title    h1 clr-white font-statewideBold'>
                        INSPIRED BY THE
                        NEED TO SUCCEED
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToActionAbout
