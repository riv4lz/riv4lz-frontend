import React from 'react'
import { Link, Route, useNavigate } from 'react-router-dom'
import Btn from '../../button/Btn'
import './CallToAction.scss'

const CallToAction = () => {
    const navigate = useNavigate();

    const onBecomMember = () => {
        console.log("test");
    }

    const onFeatures = () => {
        navigate('#Features');
    }

    return (
        <div className='callToAction_Container'>
            <div className='callToAction_Wrapper'>
                <div className='callToAction_MainSection'>
                    <div className='callToAction_Title H1 Text_Secondary'>
                        CASTING MADE
                    </div>

                    <div className='callToAction_TitleModern A3 Text_Primary' style={{ fontSize: '105px' }}>
                        MODERN
                    </div>
                    <div className='callToAction_Paragraph P3_Statewide_Bold'>
                        <span className='Text_Secondary'>Discover our innovative platform for casters and organisations alike - </span>
                        <span className='Text_Primary'>“imagine if booking a caster was as easy as ordering a pizza”</span>

                    </div>
                    <div className='callToAction_Buttons'>
                        <Btn onClick={onBecomMember} children='BECOME A MEMBER' classes='btn_CallToAction_Solid P4_Statewide_Bold Text_Secondary'></Btn>
                        <Btn onClick={onFeatures} children='EXPLORE FEATURES' classes='btn_CallToAction_Outline P4_Statewide_Bold Text_Secondary'></Btn>
                    </div>
                </div>
                <div className='callToAction_emptyDiv'>
                    &nbsp;
                </div>
            </div>
        </div >
    )
}

export default CallToAction