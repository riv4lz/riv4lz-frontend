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
        <div id="Features" className='guide_Container'>
            <div className='guide_Wrapper Grid Justify_Center Align_Center'>
                <div className='text_Container'>
                    <div className='guide_Title H2 Text_Secondary'> how does it work?</div>
                    <div className='guide_Buttons P1_Oxanium Bold Flex Justify_Center Align_Center'>
                        <div style={{ color: casterState === true ? '#279BBB' : 'white' }} onClick={onCaster}>Caster</div>
                        <div style={{ color: orgState === true ? '#279BBB' : 'white' }} onClick={onOrg}>Organisation</div>
                    </div>
                    {casterState === true ? <Caster /> : <Org />}
                </div>
                <div className='video_Container Flex Justify_Center Align_Center'>
                    <div className='video_Wrapper Flex Justify_Center Align_Center'>
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Caster = () => {
    return (
        <><div className='guide_ComponentContainer Flex Justify_Center Align_Center'>
            <div className='number A4 Text_Secondary Flex Justify_Center Align_Center'>
                1
            </div>
            <div className='text_Wrapper Flex'>
                <div className='title P3_Oxanium Bold Text_Secondary'>
                    Register
                </div>
                <div className='paragraph  P3_Oxanium Medium  Text_Secondary'>
                    For business which a product online
                    product listings in the
                </div>
            </div>
        </div><div className='guide_ComponentContainer Flex Justify_Center Align_Center'>
                <div className='number A4 Text_Secondary Flex Justify_Center Align_Center'>
                    2
                </div>
                <div className='text_Wrapper Flex'>
                    <div className='title P3_Oxanium Bold Text_Secondary'>
                        Find Match
                    </div>
                    <div className='paragraph  P3_Oxanium Medium  Text_Secondary'>
                        For business which a product online
                        product listings in the
                    </div>
                </div>
            </div><div className='guide_ComponentContainer Flex Justify_Center Align_Center'>
                <div className='number A4 Text_Secondary Flex Justify_Center Align_Center'>
                    3
                </div>
                <div className='text_Wrapper Flex'>
                    <div className='title P3_Oxanium Bold Text_Secondary'>
                        Make Offer
                    </div>
                    <div className='paragraph P3_Oxanium Medium Text_Secondary'>
                        For business which a product online
                        product listings in the
                    </div>
                </div>
            </div></>
    )
}

const Org = () => {
    return (
        <><div className='guide_ComponentContainer Flex Justify_Center Align_Center'>
            <div className='number A4 Text_Secondary Flex Justify_Center Align_Center'>
                1
            </div>
            <div className='text_Wrapper Flex'>
                <div className='title P3_Oxanium Bold Text_Secondary'>
                    Register Org
                </div>
                <div className='paragraph  P3_Oxanium Medium  Text_Secondary'>
                    For business which a product online
                    product listings in the
                </div>
            </div>
        </div><div className='guide_ComponentContainer Flex Justify_Center Align_Center'>
                <div className='number A4 Text_Secondary Flex Justify_Center Align_Center'>
                    2
                </div>
                <div className='text_Wrapper Flex'>
                    <div className='title P3_Oxanium Bold Text_Secondary'>
                        Find Match Org
                    </div>
                    <div className='paragraph  P3_Oxanium Medium  Text_Secondary'>
                        For business which a product online
                        product listings in the
                    </div>
                </div>
            </div><div className='guide_ComponentContainer Flex Justify_Center Align_Center'>
                <div className='number A4 Text_Secondary Flex Justify_Center Align_Center'>
                    3
                </div>
                <div className='text_Wrapper Flex'>
                    <div className='title P3_Oxanium Bold Text_Secondary'>
                        Make Offer Org
                    </div>
                    <div className='paragraph P3_Oxanium Medium Text_Secondary'>
                        For business which a product online
                        product listings in the
                    </div>
                </div>
            </div></>
    )
}


export default Guide