import React from 'react'
import './Match.scss'
import astralis from '../../../assets/images/Astralis.png'
import youtube from '../../../assets/images/youtube.png'
import twitch from '../../../assets/images/twitch.png'
import Btn from '../../button/Btn'


const Match = () => {
    return (
        <div className='Match_Container'>
            <div className='Match_Wrapper'>
                <div className="TeamLogo1_Container">
                    <img className="TeamLogo_Element" src={astralis}></img>
                </div>
                <div className="MatchInfo_Container"> 
                    <span className="MatchInfo_Title">ASTRALIS TLN VS. CEPTER BIT</span>
                    <span className="MatchInfo_Time">December 25, 2022 4:00 PM</span>
                    <div className="MatchInfo_Streams_Container">
                        <img className="Streams_Element" src={youtube}></img>
                        <img className="Streams_Element Twitch" src={twitch}></img>
                    </div>
                    <Btn onClick={() => console.log("hi")} classes="Btn_Match Text_Secondary" children="See More" />
                </div>
                <div className="TeamLogo2_Container">
                    <img className="TeamLogo_Element" src={astralis}></img>
                </div>
            </div>
        </div>
    )
}

export default Match