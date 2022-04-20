import React from 'react'
import Btn from '../../button/Btn'
import './Guide.scss'

const Guide = () => {
    const test = () => {
        console.log("TEST 1");

    }

    return (
        <div id="Features" className='guide_Container'>
            <div className='guide_Wrapper'>
                <div className='guide_Title H2 Text_Secondary'>
                    HOW DOES IT WORK?
                </div>
                <div className='guide_StepCards'>
                    <div className='guide_StepContainer'>
                        <div className='guide_StepWrapper'>
                            <div className='guide_stepCounter A2 Text_Secondary'>
                                1
                            </div>
                            <div className='guide_stepCounter_Text'>
                                <div className='title P1_Statewide_Bold Text_Secondary'>
                                    STEP 1
                                </div>
                                <div className='paragraph P4_Poppins Text_Secondary'>
                                    The platform is designed to work as a media for orginasations to easily find_in_page
                                    casters but also for casters to find jobs and essentially to suport the esport industry
                                    in general
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='guide_StepContainer Float_Right'>
                        <div className='guide_StepWrapper '>
                            <div className='guide_stepCounter A2 Text_Secondary'>
                                2
                            </div>
                            <div className='guide_stepCounter_Text'>
                                <div className='title P1_Statewide_Bold Text_Secondary'>
                                    STEP 2
                                </div>
                                <div className='paragraph P4_Poppins Text_Secondary'>
                                    The platform is designed to work as a media for orginasations to easily find_in_page
                                    casters but also for casters to find jobs and essentially to suport the esport industry
                                    in general
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='guide_StepContainer'>
                        <div className='guide_StepWrapper'>
                            <div className='guide_stepCounter A2 Text_Secondary'>
                                3
                            </div>
                            <div className='guide_stepCounter_Text'>
                                <div className='title P1_Statewide_Bold Text_Secondary'>
                                    STEP 3
                                </div>
                                <div className='paragraph P4_Poppins Text_Secondary'>
                                    The platform is designed to work as a media for orginasations to easily find_in_page
                                    casters but also for casters to find jobs and essentially to suport the esport industry
                                    in general
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='guide_VideoContainer'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" ></iframe>
                </div>
                <div className='guide_ButtonsContainer'>
                    <div className='guide_ButtonsWrapper'>
                        <Btn onClick={test} children='SEE OUR FULL GUIDE' classes='btn_CallToAction_Solid P4_Statewide_Bold Text_Secondary'></Btn>
                        <Btn onClick={test} children='READ MORE ABOUT US' classes='btn_CallToAction_Outline P4_Statewide_Bold Text_Secondary'></Btn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guide