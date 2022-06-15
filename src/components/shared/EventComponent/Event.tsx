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
        <div className='[ MatchEvent ]    { flex-flow margin-bottom-m flex-direction-row }'>
            <div className='MatchEvent__Wrapper    { display-flex flex-direction-row justify-content-space-evenly align-itemns-center }'>
                <div className='MatchEvent__WrapperLogo    { flex-flow }'>
                    <img className='MatchEvent__Logo' src={getImageService.getImage(E.teams[0].name)} alt={E.teams[0].name} />
                </div>
                <div className='[ EventInfo ]    { display-flex flex-direction-column justify-content-space-evenly align-items-center clr-white }'>
                    <div className='EventInfo__Title    { p1 font-oxanium fw-900 } '>
                        {E.teams[0].name} VS {E.teams[1].name}
                    </div>
                    <div className='EventInfo__Date    { p3 font-oxanium fw-600 }'>
                        {format(E.time)}
                    </div>
                    <div className='EventInfo__Socials    { flex-flow flex-direction-row }'>
                        <img src={Youtube} alt="Youtube" />
                        <img src={Twitch} alt="Twitch" />
                    </div>
                    <div onClick={() => show(E)} className='EventInfo__Button    { cursor-pointer flex-flow p3 font-oxanium fw-900 clr-darkblue'>
                        See more
                    </div>
                </div>
                <div className='MatchEvent__WrapperLogo    { flex-flow }'>
                    <img className='MatchEvent__Logo' src={getImageService.getImage(E.teams[1].name)} alt={E.teams[1].name} />
                </div>
            </div>
        </div>
    )
}

export default Event