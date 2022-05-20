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
        <div className='CallToAction'>
            <div className='CallToAction__Wrapper'>
                <div className='CallToAction__Wrapper__MainSection'>
                    <div className='CallToAction__Wrapper__MainSection__Title    h1 clr-white font-statewideBold'>
                        CASTING MADE
                    </div>
                    <div className='CallToAction__Wrapper__MainSection__TitleTwo    h0 clr-primary font-statewideBold'>
                        MODERN
                    </div>
                    <div className='CallToAction__Wrapper__MainSection__Paragraph   p2 clr-white font-poppins fontWeight-900'>
                        <span className='CallToAction__Wrapper__MainSection__Paragraph__MainLine'> Discover our innovative platform for casters and organisations alike - </span>
                        <span className='CallToAction__Wrapper__MainSection__Paragraph__TagLine    clr-primary'>“imagine if booking a caster was as easy as ordering a pizza”</span>

                    </div>
                    <div className='callToAction_Buttons'>
                        <Btn onClick={onBecomMember} children='Join Us Now' classes='btn_CallToAction_Blue P3_Oxanium Bold Text_Dark_Blue'></Btn>
                        <Btn onClick={onFeatures} children='Read More' classes='btn_CallToAction_White P3_Oxanium Bold Text_Dark_Blue'></Btn>
                    </div>
                    <div className='callToAction_emptyDiv'>
                        &nbsp;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
