import React from 'react'
import Btn from '../../button/Btn'
import './Guide.scss'
import "../../../index.scss";
import { useState } from 'react'

const Guide = () => {
    const [casterState, setCasterState] = useState(true);
    const [orgState, setOrgState] = useState(false);

    const onCaster = () => {
        setCasterState(true);
        setOrgState(false);
    }

    const onOrg = () => {
        setCasterState(false);
        setOrgState(true);
    }


    return (
        <div className='[ Guide ]'>
            <div className='Guide__Wrapper    display-grid justify-content-center align-items-center'>
                <div className='[ ContentContainer ]'>
                    <div className='ContentContainer__Title    h2 font-statewideBold clr-white'> how does it work?</div>
                    <div className='ContentContainer__Buttons    p1 font-oxanium fw-900 flex-flow'>
                        <div style={{ color: casterState === true ? '#279BBB' : 'white' }} onClick={onCaster}>Caster</div>
                        <div style={{ color: orgState === true ? '#279BBB' : 'white' }} onClick={onOrg}>Organisation</div>
                    </div>
                    {casterState === true ? <Caster /> : <Org />}
                </div>
                <div className='[ VideoContainer ]    flex-flow'>
                    <div className='VideoContainer__Wrapper    flex-flow'>
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Caster = () => {
    return (
        <>
            <div className='[ GuideElement ]    flex-flow'>
                <div className='GuideElement__Number    a4 font-statewideBold clr-white flex-flow'>
                    1
                </div>
                <div className='[ TextSection ]    display-flex'>
                    <div className='TextSection__Title    p3 font-oxanium fw-900 clr-white'>
                        Register
                    </div>
                    <div className='TextSection__Paragraph    p3 font-oxanium fw-300 clr-white'>
                        For business which a product online
                        product listings in the
                    </div>
                </div>
            </div>
            <div className='[ GuideElement ]    flex-flow'>
                <div className='GuideElement__Number    a4 font-statewideBold clr-white flex-flow'>
                    2
                </div>
                <div className='[ TextSection ]    display-flex'>
                    <div className='TextSection__Title    p3 font-oxanium fw-900 clr-white'>
                        Send offer
                    </div>
                    <div className='TextSection__Paragraph    p3 font-oxanium fw-300 clr-white'>
                        For business which a product online
                        product listings in the
                    </div>
                </div>
            </div>
            <div className='[ GuideElement ]    flex-flow'>
                <div className='GuideElement__Number    a4 font-statewideBold clr-white flex-flow'>
                    3
                </div>
                <div className='[ TextSection ]    display-flex'>
                    <div className='TextSection__Title    p3 font-oxanium fw-900 clr-white'>
                        Cast match
                    </div>
                    <div className='TextSection__Paragraph    p3 font-oxanium fw-300 clr-white'>
                        For business which a product online
                        product listings in the
                    </div>
                </div>
            </div>
        </>
    )
}

const Org = () => {
    return (
        <>
            <div className='[ GuideElement ]    flex-flow'>
                <div className='GuideElement__Number    a4 font-statewideBold clr-white flex-flow'>
                    1
                </div>
                <div className='[ TextSection ]    display-flex'>
                    <div className='TextSection__Title    p3 font-oxanium fw-900 clr-white'>
                        Register
                    </div>
                    <div className='TextSection__Paragraph    p3 font-oxanium fw-300 clr-white'>
                        For business which a product online
                        product listings in the
                    </div>
                </div>
            </div>
            <div className='[ GuideElement ]    flex-flow'>
                <div className='GuideElement__Number    a4 font-statewideBold clr-white flex-flow'>
                    2
                </div>
                <div className='[ TextSection ]    display-flex'>
                    <div className='TextSection__Title    p3 font-oxanium fw-900 clr-white'>
                        Create match
                    </div>
                    <div className='TextSection__Paragraph    p3 font-oxanium fw-300 clr-white'>
                        For business which a product online
                        product listings in the
                    </div>
                </div>
            </div>
            <div className='[ GuideElement ]    flex-flow'>
                <div className='GuideElement__Number    a4 font-statewideBold clr-white flex-flow'>
                    3
                </div>
                <div className='[ TextSection ]    display-flex'>
                    <div className='TextSection__Title    p3 font-oxanium fw-900 clr-white'>
                        Accept offer
                    </div>
                    <div className='TextSection__Paragraph    p3 font-oxanium fw-300 clr-white'>
                        For business which a product online
                        product listings in the
                    </div>
                </div>
            </div>
        </>
    )
}


export default Guide
