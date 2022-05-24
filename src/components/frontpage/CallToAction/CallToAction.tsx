import React from 'react'
import { useNavigate } from 'react-router-dom'
import Btn from '../../button/Btn'
import './CallToAction.scss'

const CallToAction = () => {
    const navigate = useNavigate();

    const onBecomeMember = () => {
        navigate('/Register')
    }

    const onFeatures = () => {
        navigate('/About');
    }

    return (
        <div className='[ CallToAction ] '>
            <div className='CallToAction__Wrapper'>
                <div className='[ ContentSection ]'>
                    <div className='ContentSection__Title   h1 clr-white font-statewideBold'>
                        CASTING MADE
                    </div>
                    <div className='ContentSection__HighlightedTitle    h0 clr-primary font-statewideBold'>
                        MODERN
                    </div>
                    <div className='ContentSection__Paragraph   p2 clr-white font-poppins fontWeight-900'>
                        <span className='ContentSection__Paragraph__Text'> Discover our innovative platform for casters and organisations alike - </span>
                        <span className='ContentSection__Paragraph__HighlightedText clr-primary'>“imagine if booking a caster was as easy as ordering a pizza”</span>

                    </div>
                    <div className='ContentSection__Buttons'>
                        <Btn onClick={onBecomeMember} children='Join Us Now' classes='btn_CallToAction_Blue p3 font-oxanium fw-900 clr-darkblue'></Btn>
                        <Btn onClick={onFeatures} children='Read More' classes='btn_CallToAction_White p3 font-oxanium fw-900 clr-darkblue'></Btn>
                    </div>
                    <div className='ContentSection__emptyDiv'>
                        &nbsp;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
