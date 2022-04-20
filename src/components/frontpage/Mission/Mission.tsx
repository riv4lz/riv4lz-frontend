import React from 'react'
import './Mission.scss'
import logo from '../../../assets/images/Union.png';

const Mission = () => {
    return (
        <div className='mission_Container'>
            <div className='mission_Wrapper'>
                <div className='mission_Title H2 Text_Secondary'>
                    WHY ARE WE HERE?
                </div>
                <div className='mission_Component'>
                    <div className='title H2 Text_Primary'>
                        MISSION
                    </div>
                    <div className='paragraph P1_Poppins Text_Secondary'>
                        Our mission is to improve the esport industry for casters
                        and organisations alike by giving them a platform where
                        they easier can get in contact with eachother the goal
                        behind this is to create more stable jobs for freelance
                        casters out there of all experience levels and to increase
                        organisation branding in order to grow the esport community
                    </div>
                </div>
                <hr></hr>
                <div className='vision_Component'>
                    <div className='title H2 Text_Primary'>
                        VISION
                    </div>
                    <div className='paragraph P1_Poppins'>
                        <span className='Text_Secondary'>The vision behind riv4lz is to impower casters of all levels
                            by providing a secure platform for growth and increasing the
                            chance to turn your passion into a full time job. In the
                            future we want to be an international gathering place for the
                            esports entertainment market. Lets make esport even greater</span>
                        <span className='Text_Primary'><b> TOGETHER </b></span>
                    </div>
                </div>
                <div className='mission_Footer H3 Text_Primary'>
                    together we shape the future of esports
                </div>
            </div>
        </div>
    )
}

export default Mission