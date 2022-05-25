import React from 'react'
import Twitch from '../../../assets/icons/social-media/twitch.svg'
import Youtube from '../../../assets/icons/social-media/youtube.svg'
import './Event.scss'
import GetImageService from '../../../services/getImageService'

const Event = ({ E, show }: any) => {
    const format = (time: any) => {
        return new Date(time).toLocaleString()
    }

    const getImageService = new GetImageService();
    
    return (
        <div className='matches_Component Flex Justify_Center Align_Center'>
            <div className='matches_ComponentWrapper Flex Justify_Evenly Align_Center'>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={getImageService.getImage(E.teams[0].name)} alt={E.teams[0].name} />
                </div>
                <div className='matches_Info Flex Justify_Evenly Align_Center Text_Secondary'>
                    <div className='matches_InfoTitle P1_Oxanium Bold '>
                        {E.teams[0].name} VS {E.teams[1].name}
                    </div>
                    <div className='matches_InfoDate P3_Oxanium Medium'>
                        {format(E.time)}
                    </div>
                    <div className='matches_InfoSocials Flex Justify_Center Align_Center'>
                        <img src={Youtube} alt="Astralis" />
                        <img src={Twitch} alt="Astralis" />
                    </div>
                    <div onClick={() => show(E) } className='matches_InfoButton pointer Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
                        See more
                    </div>
                </div>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={getImageService.getImage(E.teams[1].name)} alt={E.teams[1].name} />
                </div>
            </div>
        </div>
    )
}

export default Event