import React from 'react'
import './MissionAndVision.scss'

const MissionAndVision = () => {
    return (
        <div className='[ MissionAndVision ]    { width-full flex-flow }'>
            <div className='MissionAndVision__Wrapper    { width-content flex-flow flex-direction-column }'>
                <div className='[ Title ]    { h2 font-statewideBold clr-white }'>
                    WHY ARE WE HERE?
                </div>
                <div className='[ Mission ]'>
                    <div className='Mission__Title    { h2 font-statewideBold clr-primary }'>
                        MISSION
                    </div>
                    <div className='Mission__Paragraph    { p1 font-poppins clr-white }'>
                        Our mission is to improve the esport industry for casters
                        and organisations alike by giving them a platform where
                        they easier can get in contact with eachother the goal
                        behind this is to create more stable jobs for freelance
                        casters out there of all experience levels and to increase
                        organisation branding in order to grow the esport community
                    </div>
                </div>
                <hr></hr>
                <div className='[ Vision ]'>
                    <div className='Vision__Title   { h2 font-statewideBold clr-primary }'>
                        VISION
                    </div>
                    <div className='Vision__Paragraph    { p1 font-poppins clr-white }'>
                        <span className='clr-secondary'>The vision behind riv4lz is to impower casters of all levels
                            by providing a secure platform for growth and increasing the
                            chance to turn your passion into a full time job. In the
                            future we want to be an international gathering place for the
                            esports entertainment market. Lets make esport even greater</span>
                        <span className='clr-primary'><b> TOGETHER </b></span>
                    </div>
                </div>
                <div className='[ EndQuote ]    { h3 font-statewideBold clr-primary }'>
                    together we shape the future of esports
                </div>
            </div>
        </div>
    )
}

export default MissionAndVision
