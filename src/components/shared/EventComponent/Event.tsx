import React from 'react'
import Twitch from '../../../assets/icons/social-media/twitch.svg'
import Youtube from '../../../assets/icons/social-media/youtube.svg'
import Tricked from '../../../assets/images/Esports-orgs/Tricked.svg'
import Astralis from '../../../assets/images/Esports-orgs/Astralis.svg'
import './Event.scss'

const Event = ({E, show}: any) => {
    return (
        <div className='matches_Component Flex Justify_Center Align_Center'>
            <div className='matches_Logo Flex Justify_Center Align_Center'>
                <img src={Astralis} alt="Astralis" />
            </div>
            <div className='matches_Info Flex Justify_Center Align_Center Text_Secondary'>
                <div className='matches_InfoTitle P1_Oxanium Bold '>
                    {E.teamOne} VS {E.teamTwo}
                </div>
                <div className='matches_InfoDate P3_Oxanium Medium'>
                    {E.time}
                </div>
                <div className='matches_InfoSocials Flex Justify_Center Align_Center'>
                    <img src={Youtube} alt="Astralis" />
                    <img src={Twitch} alt="Astralis" />
                </div>
                <div onClick={() => show(E)} className='matches_InfoButton pointer Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
                    See more
                </div>
            </div>
            <div className='matches_Logo Flex Justify_Center Align_Center'>
                <img src={Tricked} alt="Tricked" />
            </div>
        </div>
    )
}

export default Event